import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import DisplayArticles from './DisplayArticles';
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
            fontSize: '.9em',
            padding: '16px'
        },
        display: 'flex',
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
    const classes = useStyles();

    const DisplayArticlesWithData = () => (
        <DisplayArticles data={testData} />
    );

    return (
        <main className={classes.container}>
            <Switch>
                <Route exact path='/' component={DisplayArticlesWithData} />
                <Route path="/page/:pageNum" exact component={DisplayArticlesWithData} />
                <Route path="/:year/:month/:day/:id" component={DisplayArticlesWithData} />
                <Route path="/category/:category" exact component={DisplayArticlesWithData} />
                <Route exact path="/category/:category/page/:categoryPageNum" component={DisplayArticlesWithData} />
                <Route path="/tag/:tag" exact component={DisplayArticlesWithData} />
                <Route exact path="/tag/:tag/page/:tagPageNum" component={DisplayArticlesWithData} />
                <Route component={NotFound} />
            </Switch>
            <SideBar data={testData}/>
        </main>
    );
};

export default BlogMain;