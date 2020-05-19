import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledAppBar = styled(AppBar)({
    backgroundColor: 'rgb(127, 15, 255)',
});

const StyledHeaderTitleLink = styled(Link)({
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.2em',
});

const Header = ({ title }) => (
    <StyledAppBar >
        <Toolbar>
            <StyledHeaderTitleLink to="/">
                {title}
            </StyledHeaderTitleLink>
        </Toolbar>
    </StyledAppBar>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;