import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DisplayArticles from './DisplayArticles';
import SideBar from './SideBar';
import TopInfo from './TopInfo';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        padding: '0',
    },
}));

const BlogMain = ({ match }) => {
    const classes = useStyles();
    const { category, tag } = match.params;

    return (
        <main>
            {category ? <TopInfo type="category" content={category} /> : null}
            {tag ? <TopInfo type="tag" content={tag} /> : null}
            <Grid container spacing={0} className={classes.mainGrid}>
                <DisplayArticles match={match}/>
                <SideBar />
            </Grid>
        </main>
    );
};

export default BlogMain;