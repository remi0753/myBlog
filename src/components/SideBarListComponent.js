import React from 'react';
import { Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        padding: '24px',
        marginTop: '1.5em',
    },
    titleContainer: {
        display: 'flex',
        fontSize: '130%',
        fontWeight: 'bold',
        marginBottom: '1.1em',
    },
    listContainer: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
    },
    listItem: {
        padding: '8px 0',
        borderBottom: '1px solid #ddd',
        lineHeight: '1.5',
    },
    postLink: {
        textDecoration: 'none',
        color: 'rgb(127, 15, 255)',
    },
}));

const SideBarListComponent = ({ title, IconName, listItems, color }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paperContainer}>
            <Box className={classes.titleContainer}>
                <IconName style={{marginRight: '5px', color }} />
                {title}
            </Box>
            <ul className={classes.listContainer}>
                {listItems.map((item, i) => (
                    <li className={classes.listItem} key={i}>
                        <Link to={item.link} className={classes.postLink} onClick={() => window.scrollTo(0, 0)}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </Paper>
    );
};

export default SideBarListComponent;