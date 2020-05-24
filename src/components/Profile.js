import React from 'react';
import { Paper, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import setting from '../settings';
import Markdown from './Markdown/Markdown';
import ProfileSNSIcons from './ProfileSNSIcons';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        padding: '24px',
    },
    profileTitle: {
        fontSize: '130%',
        fontWeight: 'bold',
        marginBottom: '1.6em',
    },
    iconContainer: {
        textAlign: 'center',
        marginBottom: '1em',
    },
    profileImage: {
        width: '100%',
    },
}));

const Profile = () => {
    const classes = useStyles();
    const { iconPath, profile } = setting;

    return (
        <Paper className={classes.paperContainer}>
            <Box className={classes.profileTitle}>プロフィール</Box>
            <Container className={classes.iconContainer}>
                <img src={iconPath} alt="remi" className={classes.profileImage}/>
            </Container>
            <Markdown source={profile} />
            <ProfileSNSIcons />
        </Paper>
    );
};

export default Profile;