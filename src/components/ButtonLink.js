import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: 'rgb(127, 15, 255)',
        color: 'white',
        padding: '0.3em 2em',
        fontSize: '1em',
        borderWidth: 'initial',
        borderStyle: 'none',
        borderColor: 'initial',
        borderRadius: '3px',
        cursor: 'pointer',
    },
}));

const ButtonLink = ({ url, content }) => {
    const classes = useStyles();

    return (
        <Link to={url}>
            <button className={classes.button} onClick={() => window.scrollTo(0, 0)}>
                {content}
            </button>
        </Link>
    );
};

export default ButtonLink;