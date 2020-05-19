import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#fefefe',
        width: '100%',
        padding: theme.spacing(2, 0),
        [theme.breakpoints.down('sm')]: {
            fontSize: '.7em',
            padding: theme.spacing(1, 0),
        },
    },
    copyright: {
        color: 'rgba(0, 0, 0, 0.56)',
        textAlign: 'center',
    },
    description: {
        color: 'rgba(0, 0, 0, 0.54)',
        textAlign: 'center',
    },
    descriptionLink: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.54)',
    },
    title: {
        textAlign: 'center',
        fontSize: '1em',
        margin: '10px 0',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0',
        },
    },
    titleLink: {
        textDecoration: 'none',
        color: 'rgb(127, 15, 255)',
    },
}));

const Footer = (props) => {
    const classes = useStyles();
    const { title, twitter, github } = props;
    
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Box className={classes.title}>
                    <Link to="/" className={classes.titleLink}>
                        {title}
                    </Link>
                </Box>
                <Box className={classes.description}>
                    Twitter: 
                    <a href={`https://twitter.com/${twitter.slice(1)}`} className={classes.descriptionLink}>{twitter}</a>
                    , Github: 
                    <a href={`https://github.com/${github}`} className={classes.descriptionLink}>{github}</a>
                </Box>
                <Box className={classes.copyright}>
                    {'Copyright © Remi '}
                    {new Date().getFullYear()}
                    {'.'}
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
};