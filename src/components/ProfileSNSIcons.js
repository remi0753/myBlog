import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';

import setting from '../settings';

const useStyles = makeStyles((theme) => ({
    SNSContainer: {
        display: 'flex',
    },
    SNSIconContainer: {
        marginLeft: 'auto',
    },
    icon: {
        margin: '0 3px',
    },
}));

const ProfileSNSIcons = () => {
    const classes = useStyles();
    const { github, twitter, mail } = setting;
    const icons = [
        {icon: GitHubIcon, link: `https://github.com/${github}`, color: 'black'},
        {icon: TwitterIcon, link: `https://twitter.com/${twitter.slice(1)}`, color: '#55acee'},
        {icon: MailIcon, link: `mailto:${mail}`, color: '#cd201f'},
    ];

    return (
        <Box className={classes.SNSContainer} >
            <Box className={classes.SNSIconContainer}>
                {icons.map((icon, i) => (
                    <a key={i} href={icon.link} className={classes.icon}>
                        <icon.icon style={{ color: icon.color }}/>
                    </a>
                ))}
            </Box>
        </Box>
    );
};

export default ProfileSNSIcons;