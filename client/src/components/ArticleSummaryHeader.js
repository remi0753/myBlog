import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link } from 'react-router-dom';

import Tag from './Tag';

const useStyles = makeStyles((theme) => ({
    articleHeader: {
        marginBottom: '1.5em',
    },
    dateContainer: {
        display: 'flex',
        marginBottom: '10px',
        color: '#bdc3c7',
    },
    articleTitleContainer: {
        margin: '0 0 0.5em',
        fontSize: '1.5em',
    },
    articleTitleLink: {
        color: 'rgb(127, 15, 255)',
        textDecoration: 'none',
    },
    tagContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));

const ArticleSummaryHeader = ({ date, title, category, tags, url }) => {
    const classes = useStyles();

    return (
        <header className={classes.articleHeader}>
            <Box className={classes.dateContainer}>
                <ScheduleIcon fontSize="small" color="action"/>
                {date}
            </Box>
            <h1 className={classes.articleTitleContainer}>
                <Link to={url}  className={classes.articleTitleLink}>{title}</Link>
            </h1>
            <Box className={classes.tagContainer}>
                <Tag type='category' content={category}/>
                {tags.map((tag, i) => (
                    <Tag type='tag' content={tag} key={i} />
                ))}
            </Box>
        </header>
    );
};

export default ArticleSummaryHeader;