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

const BlogMain = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('./api/v1/get-summary-list')
        .then((res) => res.json())
        .then((data) => {
            const setData = data.map((item) => {
                return { ...item, date: item.date.split('T')[0].replace(/-/g, '/'), id: item.articleId};
            });
            setPosts(setData);
        });
    }, []);
        
    const classes = useStyles();

    if (!posts) {
        return '';
    }

    const ListArticlesPage = ({ match }) => {
        if (posts.length === 0) {
            return '';
        }

        return (
            <main className={classes.container}>
                <ListArticles posts={posts} params={match.params}/>
                <SideBar posts={posts}/>
            </main>
        );
    };

    const MainPage = ({ match }) => {
        if (posts.length === 0) {
            return '';
        }

        const { year, month, day, id } = match.params;
        const articleIndex = posts.findIndex((post) => (post.date === year + '/' + month + '/' + day && post.id === id));
        const prevIndex = articleIndex - 1; 
        const nextIndex = articleIndex + 1
        const [prevTitle, prevUrl] = 0 <= prevIndex ? 
            [posts[prevIndex].title,  posts[prevIndex].date + '/' + posts[prevIndex].id] : 
            ['', ''];
        const [nextTitle, nextUrl] = nextIndex <= posts.length - 1 ?
            [posts[nextIndex].title, posts[nextIndex].date + '/' + posts[nextIndex].id] :
            ['', ''];
        const { title, date, category, tag, _id } = posts[articleIndex];

        return (
            <main className={classes.container}>
                <ArticleMain 
                    params={match.params} 
                    prevTitle={prevTitle} 
                    prevUrl={prevUrl} 
                    nextTitle={nextTitle} 
                    nextUrl={nextUrl}
                    title={title}
                    date={date}
                    category={category}
                    tag={tag}
                    id={_id}
                />
                <SideBar posts={posts}/>
            </main>
        );
    };

    const NotFoundPage = () => {
        if (posts.length === 0) {
            return '';
        }

        return (
            <main className={classes.container}>
                <NotFound />
                <SideBar posts={posts}/>
            </main>       
        );
    };

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