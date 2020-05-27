import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '3em',
        },
    },
    button: {
        backgroundColor: 'rgb(127, 15, 255)',
        color: 'white',
        padding: '0.8em 2em',
        fontSize: '.9em',
        borderWidth: 'initial',
        borderStyle: 'none',
        borderColor: 'initial',
        borderRadius: '3px',
        cursor: 'pointer',
    },
    newer: {
        marginLeft: 'auto',      
    },
    older: {
        marginRight: 'auto',
    },
}));

const BackAndNextButton = ({ prevUrl, nextUrl, prev, next }) => {
    const classes = useStyles();
    const nextTitle = next ? next.length > 10 ? next.slice(0, 10) + '...' : next : '';
    const prevTitle = prev ? prev.length > 10 ? prev.slice(0, 10) + '...' : prev : '';
    const fixedNextUrl = next ? '/article/' + nextUrl : nextUrl;
    const fixedPrevUrl = prev ? '/article/' + prevUrl : prevUrl;

    return (
        <Box className={classes.buttonContainer}>
            { prevUrl ? 
                <Link to={fixedPrevUrl} className={classes.older}>
                    <button className={classes.button} onClick={() => window.scrollTo(0, 0)}>
                        {prevTitle ? prevTitle : '古い記事'}
                    </button>
                </Link> :
                null
            }
            { nextUrl ?             
                <Link to={fixedNextUrl} className={classes.newer}>
                    <button className={classes.button} onClick={() => window.scrollTo(0, 0)}>
                        {nextTitle ? nextTitle : '新しい記事'}
                    </button>
                </Link> :
                null
            }
        </Box>
    );
};

export default BackAndNextButton;