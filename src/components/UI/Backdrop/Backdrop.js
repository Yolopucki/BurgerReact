import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = props => (props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null);

Backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool
};
export default Backdrop;
