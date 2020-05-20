import React from 'react';
import { Grid } from '@material-ui/core';

import ArticleList from './ArticleList';
import BackAndNextButton from './BackAndNextButton';

const DisplayArticles = ({ match, data }) => {
    return (
        <Grid item xs={12} md={8}>
            <ArticleList posts={data}/>
            <BackAndNextButton />
        </Grid>
    );
};

export default DisplayArticles;