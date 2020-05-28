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

const ArticleMain = ({ params, prevTitle, prevUrl, nextTitle, nextUrl, title, date, category, tag, id }) => {
    const [article ,setArticle] = useState({});
    useEffect(() => {
        fetch(`./api/v1/get-article/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setArticle({ title, date, category, tag, md: data.md.replace(/\\n/g, '\n') });
        });
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