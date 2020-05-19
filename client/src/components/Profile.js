import React from 'react';
import { Paper, Box, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import setting from '../settings';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        padding: '16px',
    },
    profileTitle: {
        fontSize: '120%',
        fontWeight: 'bold',
        marginBottom: '1em',
    },
    icon: {
        width: '100%',
    },
}));

const Profile = () => {
    const classes = useStyles();
    const { iconPath } = setting;
    console.log(iconPath)

    return (
        <Paper className={classes.paperContainer}>
            <Box className={classes.profileTitle}>プロフィール</Box>
            <img src={iconPath} className={classes.icon}/>
        </Paper>
    );
};

export default Profile;