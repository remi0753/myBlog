import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import ListArticles from './ListArticles';
import SideBar from './SideBar';
import NotFound from './NotFound';
import ArticleMain from './ArticleMain';

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
        category: '雑談1',
        tag: [
            'test', 'js',
        ],
    },
    {
        id: 'test1',
        date: '2020/05/18',
        title: 'ブログのタイトル2',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談2',
        tag: [
            'test', 'js', 'aaaaaa', 'wwwwwwwwwwww', 'たぐううううううう'
        ],
    },
    {
        id: 'test2',
        date: '2020/05/19',
        title: 'ブログのタイトル、結構長いタイトルのてすとだよおおおおおおおおおおおおお',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談1',
        tag: [
            'test', 'js',
        ],
    },
    {
        id: 'test3',
        date: '2020/05/19',
        title: 'ブログのタイトル、結構長いタイトルのてすとだよおおおおおおおおおおおおお',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談1',
        tag: [
            'test', 'js',
        ],
    },
    {
        id: 'test4',
        date: '2020/05/19',
        title: 'ブログのタイトル、結構長いタイトルのてすとだよおおおおおおおおおおおおお',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談1',
        tag: [
            'test', 'js',
        ],
    },
    {
        id: 'test5',
        date: '2020/05/19',
        title: 'ブログのタイトル、結構長いタイトルのてすとだよおおおおおおおおおおおおお',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談1',
        tag: [
            'test',
        ],
    },
    {
        id: 'test6',
        date: '2020/05/19',
        title: 'ブログのタイトル、結構長いタイトルのてすとだよおおおおおおおおおおおおお',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談1',
        tag: [
            'test',
        ],
    },
];

const BlogMain = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(testData);
    }, []);
        
    const classes = useStyles();

    if (!posts) {
        return 'Loading ...';
    }

    const ListArticlesPage = ({ match }) => (
        <main className={classes.container}>
            <ListArticles posts={posts} params={match.params}/>
            <SideBar posts={posts}/>
        </main>
    );

    const MainPage = ({ match }) => (
        <main className={classes.container}>
            <ArticleMain params={match.params}/>
            <SideBar posts={posts}/>
        </main>
    );

    const NotFoundPage = () => (
        <main className={classes.container}>
            <NotFound />
            <SideBar posts={posts}/>
        </main>       
    )

    return (
        <Switch>
            <Route exact path='/' component={ListArticlesPage} />
            <Route path="/page/:pageNum" exact component={ListArticlesPage} />
            <Route exact path="/article/:year/:month/:day/:id" component={MainPage} />
            <Route path="/category/:category" exact component={ListArticlesPage} />
            <Route exact path="/category/:category/page/:pageNum" component={ListArticlesPage} />
            <Route path="/tag/:tag" exact component={ListArticlesPage} />
            <Route exact path="/tag/:tag/page/:pageNum" component={ListArticlesPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default BlogMain;