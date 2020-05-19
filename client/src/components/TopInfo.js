import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Tag from './Tag';

const useStyles = makeStyles((theme) => ({
    topLink: {
        color: 'blue',
        marginRight: '10px',
    },
    topRightArrow: {
        marginRight: '10px',
    },
    topBox: {
        display: 'flex',
        marginBottom: '16px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '8px',
        },
        fontSize: '1.3em',
    },
}));

const TopInfo = ({ type, content }) => {
    const classes = useStyles();
    return (
        <Box className={classes.topBox}>
            <Link to="/" className={classes.topLink}>{'トップ'}</Link>
            <Box className={classes.topRightArrow}>{'>'}</Box>
            <Tag type={type} content={content} />
        </Box>  
    );
};

export default TopInfo;