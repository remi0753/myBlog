import React from 'react';
import { Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ArticleSummaryHeader from './ArticleSummaryHeader';
import ButtonLink from './ButtonLink';

const useStyles = makeStyles((theme) => ({
    article: {
        marginBottom: '1em',
        padding: '2em 3em'
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
    buttonContainer: {
        width: '100%', 
        textAlign: 'right'
    },
}));

const ArticleSummary = ({ post }) => {
    const classes = useStyles();
    const url = '/article/' + post.date + '/' + post.id + '/';

    return (
        <Paper className={classes.article}>
            <article>
                <ArticleSummaryHeader 
                    date={post.date} 
                    title={post.title} 
                    category={post.category} 
                    tags={post.tag} 
                    url={url}
                />
                <section>
                    <p className={classes.articleDescription}>
                        {post.description}
                    </p>
                </section>
                <Box className={classes.buttonContainer}>
                    <ButtonLink url={url} content='続きを読む' /> 
                </Box>
            </article>

        </Paper>
    )
};

export default ArticleSummary;