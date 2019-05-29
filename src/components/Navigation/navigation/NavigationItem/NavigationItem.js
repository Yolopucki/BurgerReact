import React from 'react';
import styles from './Navigation.module.css'
import PropTypes from 'prop-types';

const NavigationItem = props => {
  return (
    <li className={styles.NavigationItem}><a href={props.link} className={props.active? styles.active: null}>{props.children}</a></li>
  );
};
NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
};

export default NavigationItem;
