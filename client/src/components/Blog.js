import React, { useEffect, useState } from 'react';
import { CssBaseline, Toolbar } from '@material-ui/core';

import setting from '../settings';
import Header from './Header';
import Footer from './Footer';
import BlogMain from './BlogMain';
import ScrollTop from './ScrollTop';

const Blog = (props) => {
    const [test, setTest] = useState(0);
    useEffect(() => {
        setTest(100);
    }, [props.match]);
    const { title, twitter, github, copyright } = setting;
    
    console.log(test);

    return (
        <React.Fragment >
            <CssBaseline />
            <Header title={title} />
            <Toolbar id="back-to-top-anchor" />
            <BlogMain />
            <ScrollTop props={props}/>
            <Footer title={title} twitter={twitter} github={github} copyright={copyright}/>
        </React.Fragment>

    );
};

export default Blog;