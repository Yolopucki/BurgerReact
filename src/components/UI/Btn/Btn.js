import React from 'react';
import PropTypes from 'prop-types';
import styles from './Btn.module.css';

const Btn = props => <button
  onClick={props.clicked}
  className={[styles.Button, styles[props.btnType]].join((' '))}>{props.children}</button>;
Btn.propTypes = {
  clicked: PropTypes.func,
  btnType: PropTypes.string.isRequired
};
export default Btn;
