import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    topLink: {
        color: 'blue',
        marginRight: '10px',
    },
    topBox: {
        display: 'flex',
        marginBottom: '16px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '8px',
        },
        fontSize: '1.2em',
    },
    tag: {
        color: '#0075c2',
    },
    category: {
        color: '#e4007f',    
    },
}));

const TopInfo = ({ type, content }) => {
    const classes = useStyles();
    return (
        <Box className={classes.topBox}>
            <Link to="/" className={classes.topLink}>{'トップ'}</Link>
            <Box>{'>【'}</Box>
            <Box className={classes[type]}>
                {type === 'category' ? 'カテゴリー' : 'タグ'}
            </Box>
            <Box>{`】${content}`}</Box>
        </Box>  
    );
};

export default TopInfo;