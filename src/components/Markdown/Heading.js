import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    h2: {
        position: 'relative',
        fontSize: '2em',
        margin: '2em 0 1em',
        paddingBottom: '0.3em',
        borderBottom: '5px solid #bbb',
        '&:after': {
            position: 'absolute',
            display: 'block',
            content: '\" \"',
            bottom: '-5px',
            width: '2em',
            borderBottom: '5px solid rgb(127, 15, 255)',
        },
    },
    h3: {
        fontSize: '1.5em',
        paddingLeft: '0.5em',
        marginTop: '2em',
        borderLeft: '5px solid rgb(127, 15, 255)',
    },
}));

const Heading = (props) => {
    const classes = useStyles();
    const headingList = {
        h1: <h1>{props.children}</h1>,
        h2: <h2 className={classes.h2}>{props.children}</h2>,
        h3: <h3 className={classes.h3}>{props.children}</h3>,
        h4: <h4>{props.children}</h4>,
        h5: <h5>{props.children}</h5>,
        h6: <h6>{props.children}</h6>,
    };

    return headingList[`h${props.level}`];
};

export default Heading;