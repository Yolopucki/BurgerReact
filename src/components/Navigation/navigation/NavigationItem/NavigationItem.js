import React from 'react';
import styles from './Navigation.module.css'
import PropTypes from 'prop-types';

const NavigationItem = ({active, children, link}) => {
  return (
    <li className={styles.NavigationItem}><a href={link} className={active? styles.active: null}>{children}</a></li>
  );
};
NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default NavigationItem;
