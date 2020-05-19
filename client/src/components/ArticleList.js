import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ArticlePaper from './ArticlePaper';

const useStyles = makeStyles((theme) => ({
    listBox: {
        marginBottom: '2em',
    },
}));

const ArticleList = ({ posts }) => {
    const classes = useStyles();
    return (
        <Box className={classes.listBox}>
            {posts.map((post, i) => (
                <ArticlePaper post={post} key={i}/>
            ))}
        </Box>
    );
};

export default ArticleList;

ArticleList.propTypes = {
    posts: PropTypes.array.isRequired,
};