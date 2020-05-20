import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DisplayArticles from './DisplayArticles';
import SideBar from './SideBar';
import TopInfo from './TopInfo';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        padding: '0',
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

const BlogMain = ({ match }) => {
    const classes = useStyles();
    const { category, tag } = match.params;

    return (
        <main>
            {category ? <TopInfo type="category" content={category} /> : null}
            {tag ? <TopInfo type="tag" content={tag} /> : null}
            <Grid container spacing={0} className={classes.mainGrid}>
                <DisplayArticles match={match} data={testData}/>
                <SideBar data={testData}/>
            </Grid>
        </main>
    );
};

export default BlogMain;