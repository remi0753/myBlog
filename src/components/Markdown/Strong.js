import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    strong: {
        fontWeight: 'bold',
        color: 'rgb(127, 15, 255)',
    },
}));

const Strong = ({ children }) => {
    const classes = useStyles();

    return <strong className={classes.strong}>{children}</strong>;
};

export default Strong;