import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Profile from './Profile';
import NewArticles from './NewArticles';

const useStyles = makeStyles((theme) => ({
    innerBox: {
        marginLeft: '16px',
        [theme.breakpoints.down('sm')]: {
            margin: '3em 0 0',
        },
    },
}));

const SideBar = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4}>
            <Box className={classes.innerBox}>
                <Profile />
                <NewArticles />
            </Box>
        </Grid>
    );
};

export default SideBar;