import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = ({show, clicked}) => (show ? <div className={styles.Backdrop} onClick={clicked}></div> : null);

Backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool
};

export default Backdrop;
