import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ScheduleIcon from '@material-ui/icons/Schedule';

import Tag from './Tag';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        marginBottom: '2em',
        borderBottom: '1px solid #ddd',
        padding: '0 0 10px 0',
    },
    dateContainer: {
        display: 'flex',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#bdc3c7',
    },
    title: {
        fontSize: '2em',
        margin: '0 0 0.5em',
    },
}));


const ArticleMainHeader = ({ title, date, category, tags }) => {
    const classes = useStyles();

    return (
        <header className={classes.headerContainer}>
            <Box className={classes.dateContainer}>
                <ScheduleIcon fontSize="small" color="action"/>
                {date}
            </Box>
            <h1 className={classes.title}>
                {title}
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

export default ArticleMainHeader;