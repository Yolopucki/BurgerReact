import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Navigation.module.css';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
    const {children, link} = props;
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={link} exact activeClassName={classes.active}>{children}</NavLink>
        </li>
    );
};
NavigationItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default NavigationItem;
