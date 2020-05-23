import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BackAndNextButton from './BackAndNextButton';
import TopInfo from './TopInfo';
import ArticleSummary from './ArticleSummary';

const useStyles = makeStyles((theme) => ({
    listBox: {
        marginBottom: '2em',
    },
}));

const ListArticles = ({ params, posts }) => {
    const classes = useStyles();

    const { tag, category } = params;
    return (
        <Grid item xs={12} md={9}>
            {tag ? <TopInfo type='tag' content={tag} /> : null}
            {category ? <TopInfo type='category' content={category} /> : null}
            <Box className={classes.listBox}>
                {posts.map((post, i) => (
                    <ArticleSummary post={post} key={i}/>
                ))}
            </Box>
            <BackAndNextButton />
        </Grid>
    );
};

export default ListArticles;