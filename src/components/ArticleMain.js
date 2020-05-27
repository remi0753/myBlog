import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ArticleMainHeader from './ArticleMainHeader';
import Markdown from './Markdown/Markdown';
import BackAndNextButton from './BackAndNextButton';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '2em 3em',
        marginBottom: '2em',
    },
}));

const testData = 
    '本文だよおおおおおおお。まーくだうんでかかれてるよぉー\n' +
    '## 見出し２\n' +
    '本文がつづくよおおおおおおおおおおお\n' + 
    '### 見出し３\n' +
    'さらにつづくよぉ。\n\n段落もつくよぉ。\n' +
    '- リスト１\n' +
    '   - リスト２\n\n' +
    '**強調**してみたよ。\n' +
    '***\n' +
    '水平線もでるね。\n\n' +
    '[Google先生](https://www.google.co.jp)\n' +
    '~~取り消し線って出るの？~~\n\n' +
    '```javascript\n' +
    'const main = () => {\n' +
    '  return 0;\n' +
    '}\n' +
    '```\n' +
    '```shell\n' +
    '$ git push origin master\n' +
    '```\n\n' +
    '> 引用テストだよ\n';

const ArticleMain = ({ params, prevTitle, prevUrl, nextTitle, nextUrl, title, date, category, tag }) => {
    const [article ,setArticle] = useState({});
    useEffect(() => {
        console.log('useEffect');
        setArticle({ title, date, category, tag, md: testData });
    }, [params])
    const classes = useStyles();

    if (!article.tag) {
        return 'loading ...';
    }

    return (
        <Grid item xs={12} md={9}>
            <Paper className={classes.container}>
                <article>
                    <ArticleMainHeader 
                        title={article.title} 
                        date={article.date} 
                        category={article.category} 
                        tags={article.tag}
                    />
                    <section>
                        <Markdown source={article.md} />
                    </section>
                </article>
            </Paper>
            <BackAndNextButton 
                prev={prevTitle} 
                prevUrl={prevUrl} 
                next={nextTitle} 
                nextUrl={nextUrl} 
            />
        </Grid>
    );
};

export default ArticleMain;