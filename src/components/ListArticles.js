import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BackAndNextButton from './BackAndNextButton';
import TopInfo from './TopInfo';
import ArticleSummary from './ArticleSummary';
import setting from '../settings';

const listNumber = setting.articleListNumber;

const useStyles = makeStyles((theme) => ({
    listBox: {
        marginBottom: '2em',
    },
}));

const ListArticles = ({ params, posts }) => {
    const classes = useStyles();

    const { tag, category, pageNum } = params;

    if (category) {
        const postsWithCategory = posts
            .filter((post) => post.category === category);
        const viewPosts = postsWithCategory
            .filter((_, i) => pageNum ? 
                listNumber * (Number(pageNum) - 1) <= i && i < listNumber * Number(pageNum) : 
                i < listNumber
            );    
        const prevUrl = pageNum ? 
            Number(pageNum) === 2 ? `/category/${category}/` : `/category/${category}/page/${(Number(pageNum) - 1)}/` :
            '';
        const nextUrl = pageNum ? 
            postsWithCategory.length > Number(pageNum) * listNumber ? `/category/${category}/page/${(Number(pageNum) + 1)}/` : '' :
            postsWithCategory.length > listNumber ? `/category/${category}/page/2` : '';
        return (
            <Grid item xs={12} md={9}>
                <TopInfo type='category' content={category} />
                <Box className={classes.listBox}>
                    {viewPosts.map((post, i) => (
                        <ArticleSummary post={post} key={i}/>
                    ))}
                </Box>
                <BackAndNextButton prevUrl={prevUrl} nextUrl={nextUrl}/>
            </Grid>
        );
    } else if (tag) {
        const postsWithTag = posts
            .filter((post) => post.tag.includes(tag));
        const viewPosts = postsWithTag
            .filter((_, i) => pageNum ? 
                listNumber * (Number(pageNum) - 1) <= i && i < listNumber * Number(pageNum) : 
                i < listNumber
            );
        const prevUrl = pageNum ? 
            Number(pageNum) === 2 ? `/tag/${tag}/` : `/tag/${tag}/page/${(Number(pageNum) - 1)}/` :
            '';
        const nextUrl = pageNum ? 
            postsWithTag.length > Number(pageNum) * listNumber ? `/tag/${tag}/page/${(Number(pageNum) + 1)}/` : '' :
            postsWithTag.length > listNumber ? `/tag/${tag}/page/2` : '';

        return (
            <Grid item xs={12} md={9}>
                <TopInfo type='tag' content={tag} />
                <Box className={classes.listBox}>
                    {viewPosts.map((post, i) => (
                        <ArticleSummary post={post} key={i}/>
                    ))}
                </Box>
                <BackAndNextButton prevUrl={prevUrl} nextUrl={nextUrl}/>
            </Grid>
        );
    } else {
        const viewPosts = posts
            .filter((_, i) => pageNum ? 
                listNumber * (Number(pageNum) - 1) <= i && i < listNumber * Number(pageNum) : 
                i < listNumber
            );
        const prevUrl = pageNum ? 
            Number(pageNum) === 2 ? '/' : `/page/${(Number(pageNum) - 1)}/` :
            '';
        const nextUrl = pageNum ? 
            posts.length > Number(pageNum) * listNumber ? `/page/${(Number(pageNum) + 1)}/` : '' :
            posts.length > listNumber ? '/page/2' : '';

        return (
            <Grid item xs={12} md={9}>
                <Box className={classes.listBox}>
                    {viewPosts.map((post, i) => (
                        <ArticleSummary post={post} key={i}/>
                    ))}
                </Box>
                <BackAndNextButton prevUrl={prevUrl} nextUrl={nextUrl}/>
            </Grid>
        );
    }
};

export default ListArticles;