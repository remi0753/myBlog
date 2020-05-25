import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: '#0366d6',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const Link = (props) => {
    const classes = useStyles();

    return <a href={props.href} className={classes.link}>{props.children}</a>;
};

export default Link;