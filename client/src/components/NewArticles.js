import React from 'react';
import { Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        padding: '24px',
        marginTop: '1.5em',
    },
    titleContainer: {
        display: 'flex',
        fontSize: '130%',
        fontWeight: 'bold',
        marginBottom: '1.6em',
    },
    titleIcon: {
        marginRight: '5px',
    }
}));

const NewArticles = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paperContainer}>
            <Box className={classes.titleContainer}>
                <UpdateIcon className={classes.titleIcon}/>
                最新記事
            </Box>
        </Paper>
    );
};

export default NewArticles;