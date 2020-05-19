import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    article: {
        marginBottom: '16px',
        padding: window.screen.availWidth < 480 ? '1em 2em' : '32px 48px',
    },
    articleHeader: {
        marginBottom: '32px',
    },
    articleTitle: {
        marginBottom: '12px',
        color: 'rgb(127, 15, 255)',
    },
    articleTag: {
        backgroundColor: '#0075c2',
        color: 'white',
        marginRight: '0.5em',
        cursor: 'pointer',
        userSelect: 'none',
        borderRadius: '3px',
        padding: '0.1em 1em'
    },
    articleCategory: {
        backgroundColor: '#e4007f',
        color: 'white',
        marginRight: '0.5em',
        cursor: 'pointer',
        userSelect: 'none',
        borderRadius: '3px',
        padding: '0.1em 1em'
    },
    articleDate: {
        marginBottom: '12px',
        color: '#bdc3c7',
    },
    articleDescription: {
        lineHeight: '2',
        margin: '1em 0px 2em',
    },
    articleReadMoreButton: {
        backgroundColor: 'rgb(127, 15, 255)',
        color: 'white',
        marginLeft: 'auto',
    },
}));

const ArticlePaper = ({ post }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.article}>
            <article>
                <header className={classes.articleHeader}>
                    <Typography variant="body1" className={classes.articleDate}>
                        {post.date}
                    </Typography>
                    <Typography variant="h5" className={classes.articleTitle}>
                        <b>{post.title}</b>
                    </Typography>
                    <div style={{display: 'flex'}}>
                        <Typography variant="subtitle2" className={classes.articleCategory}>
                            {post.category}
                        </Typography>
                        {post.tag.map((tag, i) => (
                            <Typography key={i} variant="subtitle2" className={classes.articleTag}>
                                {tag}
                            </Typography>
                        ))}
                    </div>
                </header>
                <section>
                    <Typography variant="body1" className={classes.articleDescription}>
                        {post.description}
                    </Typography>
                </section>
                <div style={{width: '100%', textAlign: 'right'}}>
                    <Button variant="contained" className={classes.articleReadMoreButton}>
                        <Typography varinat="subtitle1">
                            続きを読む
                        </Typography>
                    </Button>
                </div>
            </article>

        </Paper>
    )
};

export default ArticlePaper;