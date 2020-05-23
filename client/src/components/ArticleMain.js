import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ArticleMainHeader from './ArticleMainHeader';
import Markdown from './Markdown/Markdown';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '2em 3em',
    },
}));

const testData = {
    title: 'ブログのタイトルだよおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお',
    date: '2020/05/23',
    category: '雑談',
    tag: [
        'js', 'react', 'wwwww',
    ],
    md: 
        '本文だよおおおおおおお。まーくだうんでかかれてるよぉー\n' +
        '## 見出し２\n' +
        '本文がつづくよおおおおおおおおおおお\n' + 
        '### 見出し３\n' +
        'さらにつづくよぉ。\n\n段落もつくよぉ。\n' +
        '- リスト１\n' +
        '   - リスト２\n\n' +
        '**強調**してみたよ。\n' +
        '***\n' +
        '水平線もでるね。\n\n' +
        '[Google先生](https://www.google.co.jp)\n' +
        '~~取り消し線って出るの？~~\n\n' +
        '\`\`\`javascript\n' +
        'const main = () => {\n' +
        '  return 0;\n' +
        '}\n' +
        '\`\`\`\n',
    nextTitle: '次のブログ記事',
    nextUrl: '/article/2020/05/19/test1212/',
    prevTitle: '',
    prevUrl: '',
};

const ArticleMain = ({ params }) => {
    const [article ,setArticle] = useState({});
    useEffect(() => {
        setArticle(testData);
    }, [params])
    const classes = useStyles();

    if (!article.tag) {
        return 'loading ...';
    }

    return (
        <Grid item xs={12} md={9}>
            <Paper className={classes.container}>
                <article>
                    <ArticleMainHeader 
                        title={article.title} 
                        date={article.date} 
                        category={article.category} 
                        tags={article.tag}
                    />
                    <section>
                        <Markdown source={article.md} />
                    </section>
                </article>
            </Paper>
        </Grid>
    );
};

export default ArticleMain;