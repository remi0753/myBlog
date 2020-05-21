import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UpdateIcon from '@material-ui/icons/Update';
import CategoryIcon from '@material-ui/icons/Category';
import LabelIcon from '@material-ui/icons/Label';

import Profile from './Profile';
import SideBarListComponent from './SideBarListComponent';

const useStyles = makeStyles((theme) => ({
    innerBox: {
        marginLeft: '16px',
        [theme.breakpoints.down('sm')]: {
            margin: '3em 0 0',
        },
    },
}));

const SideBar = ({ posts }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems([
            {
                title: '最新の記事',
                iconName: UpdateIcon,
                listItems: posts.map((post) => ({
                    name: post.title,
                    link: '/'
                })),
            },
            {
                title: 'カテゴリー',
                iconName: CategoryIcon,
                color: '#e4007f',
                listItems: posts
                    .map((post) => post.category)
                    .filter((x, i, self) => self.indexOf(x) === i)
                    .map((category) => ({
                        name: category,
                        link: `/category/${category}`,
                    })),
            },
            {
                title: 'タグ',
                iconName: LabelIcon,
                color: '#0075c2',
                listItems: posts
                    .reduce((accum, post) => ([...accum, ...post.tag]), [])
                    .filter((x, i, self) => self.indexOf(x) === i)
                    .map((tag) => ({
                        name: tag,
                        link: `/tag/${tag}`,
                    })),
            }
        ]);
    }, [posts]);
    const classes = useStyles();

    return (
        <Grid item xs={12} md={4}>
            <Box className={classes.innerBox}>
                <Profile />
                {items.map((item, i) => (
                    <SideBarListComponent 
                        title={item.title} 
                        IconName={item.iconName} 
                        listItems={item.listItems} 
                        key={i}
                        color={item.color}
                    />
                ))}
            </Box>
        </Grid>
    );
};

export default SideBar;