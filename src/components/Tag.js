import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        marginRight: '0.5em',
        marginBottom: '0.5em',
        userSelect: 'none',
        borderRadius: '3px',
        padding: '0.1em 1.3em',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
    },
    tag: {
        backgroundColor: '#0075c2',
        color: 'white',
    },
    category: {
        backgroundColor: '#e4007f',
        color: 'white',
    },
}));

const Tag = ({ type, content }) => {
    const classes = useStyles();

    return (
        <Link 
            to={`/${type}/${content}/`} 
            className={classes.container + ' ' + classes[type]} 
            onClick={() => window.scrollTo(0, 0)}
        >
            {content}
        </Link>
    );
};

export default Tag;