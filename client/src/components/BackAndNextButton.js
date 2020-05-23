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
        fontSize: '1em',
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

const BackAndNextButton = ({ prevUrl, nextUrl }) => {
    const classes = useStyles();

    return (
        <Box className={classes.buttonContainer}>
            { prevUrl ? 
                <Link to={prevUrl} className={classes.older}>
                    <button className={classes.button} onClick={() => window.scrollTo(0, 0)}>
                        古い記事
                    </button>
                </Link> :
                null
            }
            { nextUrl ?             
                <Link to={nextUrl} className={classes.newer}>
                    <button className={classes.button} onClick={() => window.scrollTo(0, 0)}>
                        新しい記事
                    </button>
                </Link> :
                null
            }
        </Box>
    );
};

export default BackAndNextButton;