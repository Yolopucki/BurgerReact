import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = ({ show, clicked }) => (show
  ? <div className={styles.Backdrop} onClick={clicked} />
  : null);

Backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
};
Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};
export default Backdrop;
