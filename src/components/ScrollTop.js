import React from 'react';
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const ScrollTopComponent = (props) => {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
};

const ScrollTop = ({ props }) => (
    <ScrollTopComponent {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
        </Fab>
    </ScrollTopComponent>
);

export default ScrollTop;
