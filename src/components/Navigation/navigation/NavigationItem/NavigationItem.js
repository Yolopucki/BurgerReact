import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import classes from './Navigation.module.css';

const NavigationItem = ({ children, link }) => (
  <li className={classes.NavigationItem}>
    <NavLink to={link} exact activeClassName={classes.active}>{children}</NavLink>
  </li>
);
NavigationItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default NavigationItem;
