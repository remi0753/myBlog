import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginRight: '0.5em',
        userSelect: 'none',
        borderRadius: '3px',
        padding: '0.1em 1.3em',
    },
    tag: {
        backgroundColor: '#0075c2',
        color: 'white',
    },
    category: {
        backgroundColor: '#e4007f',
        color: 'white',
    },
}));

const Tag = ({ type, content }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container + ' ' + classes[type]}>
            {content}
        </Box>
    );
};

export default Tag;