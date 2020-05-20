import React from 'react';
import { CssBaseline, Toolbar, useScrollTrigger, Zoom, Fab, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import setting from '../settings';
import Header from './Header';
import Footer from './Footer';
import BlogMain from './BlogMain';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#e3e3e6',
        padding: '32px 64px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.7em',
            padding: '16px'
        },
    },
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },

}));

const ScrollTop = (props) => {
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

const Blog = (props) => {
    const classes = useStyles();
    const { title, twitter, github, copyright } = setting;

    return (
        <React.Fragment >
            <CssBaseline />
            <Container maxWidth="lg" className={classes.container}>
                <Header title={title} />
                <Toolbar id="back-to-top-anchor" />
                <BlogMain match={props.match}/>
                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>       
            </Container>
            <Footer title={title} twitter={twitter} github={github} copyright={copyright}/>
        </React.Fragment>

    );
};

export default Blog;