import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    blockquote: {
        borderLeft: '5px solid #ddd',
        color: '#777',
        padding: '0.5em',
        paddingRight: '0',
        margin: '0',
    },
}));

const Blockquote = (props) => {
    const classes = useStyles();

    return <blockquote className={classes.blockquote}>{props.children}</blockquote>
};

export default Blockquote;