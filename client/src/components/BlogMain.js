import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import ListArticles from './ListArticles';
import SideBar from './SideBar';
import NotFound from './NotFound';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        padding: '0',
    },
    container: {
        backgroundColor: '#e3e3e6',
        padding: '32px 64px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8em',
            padding: '16px'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

const testData = [
    {
        id: 'test',
        date: '2020/05/17',
        title: 'ブログのタイトル',
        description: '日本語の文章のテストだよ。とりあえず長々と書いてみるよ。え？なんでこんな文章でテストしてるかって？そりゃ、ああああああ、みたいのじゃ面白くないでしょ？。',
        main: 'main.',
        category: '雑談',
        tag: [
            'test', 'js',
        ],
    },
    {
        id: 'test',
        date: '2020/05/17',
        title: 'ブログのタイトル2',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談',
        tag: [
            'test', 'js', 'aaaaaa', 'wwwwwwwwwwww', 'たぐううううううう'
        ],
    },
    {
        id: 'test',
        date: '2020/05/17',
        title: 'ブログのタイトル、結構長いタイトルのてすとだよおおおおおおおおおおおおお',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談',
        tag: [
            'test', 'js',
        ],
    },
];

const BlogMain = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(testData);
    }, [])
    const classes = useStyles();

    const ListArticlesWithData = ({ match }) => (
        <ListArticles data={posts} params={match.params}/>
    );

    return (
        <main className={classes.container}>
            <Switch>
                <Route exact path='/' component={ListArticlesWithData} />
                <Route path="/page/:pageNum" exact component={ListArticlesWithData} />
                <Route path="/:year/:month/:day/:id" component={ListArticlesWithData} />
                <Route path="/category/:category" exact component={ListArticlesWithData} />
                <Route exact path="/category/:category/page/:categoryPageNum" component={ListArticlesWithData} />
                <Route path="/tag/:tag" exact component={ListArticlesWithData} />
                <Route exact path="/tag/:tag/page/:tagPageNum" component={ListArticlesWithData} />
                <Route component={NotFound} />
            </Switch>
            <SideBar posts={posts}/>
        </main>
    );
};

export default BlogMain;