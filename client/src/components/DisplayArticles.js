import React from 'react';
import { Grid } from '@material-ui/core';

import ArticleList from './ArticleList';
import BackAndNextButton from './BackAndNextButton';

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
        title: 'ブログのタイトル',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談',
        tag: [
            'test', 'js',
        ],
    },
    {
        id: 'test',
        date: '2020/05/17',
        title: 'ブログのタイトル',
        description: 'This is a description.',
        main: 'main.',
        category: '雑談',
        tag: [
            'test', 'js',
        ],
    },
];

const DisplayArticles = ({ match }) => {
    return (
        <Grid item xs={12} md={8}>
            <ArticleList posts={testData}/>
            <BackAndNextButton />
        </Grid>
    );
};

export default DisplayArticles;