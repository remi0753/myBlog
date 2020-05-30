const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const md5 = require('blueimp-md5');
const {v4: uuidv4} = require('uuid');
const createError = require('http-errors');
const multer = require('multer');
const fs = require('fs');
const app = express();

//images upload
const uploadDir = multer({dest: path.join(__dirname, 'images')});

//mongoose
//Mongo DB settings
const Schema = mongoose.Schema;
const ArticleSummaryList = mongoose.model('articleSummaryList', new Schema({
    articleId: String,
    date: Date,
    title: String,
    description: String,
    category: String,
    tag: [ String ],
    md: String,
}), 'articleSummaryList');
mongoose.connect('mongodb://localhost/localBlogDB', { useNewUrlParser: true, useUnifiedTopology: true });

const a1_md5 = 'b3569dc7ad01d670421b81348e75630f';

const parseAuthorization = (authorization) => {
    const returnData = authorization
        .substr(7)
        .split(', ')
        .reduce((prev, param) => {
            if (param.indexOf('=') < 0) {
                return prev;
            }
            const [key, value] = param.split('=');
            return { ...prev, [key]: value.replace(/"/g, '')};
        }, {});
    return returnData;
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
    secret: "secret word",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000,
    },
}));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'uploader')));

// upload page
// this page needs digest authentication
app.use('/upload', (req, res, next) => {
    let session = req.session;
    if (!!session.nc) {
        session.nc += 1;
    } else {
        session.nc = 1;
    }
    if (req.originalUrl !== '/upload') {
        next();
    } else {
        const realm = 'reincarnation';
        const method = 'GET';
        const qop = 'auth';
        const authorization = req.get('authorization');
        let judgement = false;
        if (!!authorization && !!session.nonce && !!session.nc) {
            const authParams = parseAuthorization(authorization);
            if (session.nc === parseInt(authParams.nc, 16)) {
                //const a1_md5 = md5(user + ':' + realm + ':' + pass);
                const a2 = method + ':' + authParams.uri;
                const a2_md5 = md5(a2);
                const code = 
                    a1_md5 + ':' + 
                    session.nonce + ':' + 
                    authParams.nc + ':' + 
                    authParams.cnonce + ':' + 
                    qop + ':' + 
                    a2_md5;
                const code_md5 = md5(code);
                judgement = code_md5 === authParams.response;
            }
        }
        if (judgement) {
            res.sendFile(path.join(__dirname, 'uploader', 'index.html'));
        } else {
            session.nonce = uuidv4();
            session.nc = 0;
            res.set({
                'WWW-Authenticate': 'Digest realm="' + realm + '", nonce="' + session.nonce + '", algorithm=MD5, qop="' + qop + '"'
            });
            next(createError(401));
        }
    }
});

app.post('/api/v1/insert-article', (req, res) => {
    if (!req.body){
        return res.status(500).send('request body empty.');
    }

    ArticleSummaryList.find({articleId: req.body.articleId}, (err, result) => {
        if (err || result.length !== 0) {
            return res.status(500).send('error:match id');            
        }

        const instance = new ArticleSummaryList();
        Object.keys(req.body).forEach((key) => instance[key] = req.body[key]);
        instance.save((err) => {
            if(!err) {
                return res.status(200).send('user create success.');
            } else {
                return res.status(500).send('error: save');
            }       
        });
    });
});

app.post('/api/v1/image-upload', uploadDir.array('images'), (req, res) => {
    req.files.map((file) => {
        fs.rename(file.path, path.join(__dirname, 'images', file.originalname), () => {
            return;
        });
    });
    res.status(200).send('ok');
});

app.use('/images/:image', (req, res) => {
    res.writeHead(200, {"Content-Type": "image/png"});
    res.end(fs.readFileSync(path.join(__dirname, 'images', req.params.image)));
})

app.use('/api/v1/get-article/:id', (req, res) => {
    ArticleSummaryList.findById(req.params.id, {_id: 0, md: 1}, (err, result) => {
        if (!err) {
            return res.json(result);
        } else {
            return res.status(500).send('failed');
        }       
    });
});

app.use('/api/v1/get-summary-list', (req, res) => {
    ArticleSummaryList.find({}, {md: 0}, {sort: {date: 1}}, (err, result) => {
        if (!err) {
            return res.json(result);
        } else {
            return res.status(500).send('failed');
        }
    });
});

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);