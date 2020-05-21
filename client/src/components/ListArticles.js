import React from 'react';
import { Grid } from '@material-ui/core';

import ArticleList from './ArticleList';
import BackAndNextButton from './BackAndNextButton';
import TopInfo from './TopInfo';

const ListArticles = ({ params, data }) => {
    const { tag, category } = params;
    return (
        <Grid item xs={12} md={8}>
            {tag ? <TopInfo type='tag' content={tag} /> : null}
            {category ? <TopInfo type='category' content={category} /> : null}
            <ArticleList posts={data}/>
            <BackAndNextButton />
        </Grid>
    );
};

export default ListArticles;