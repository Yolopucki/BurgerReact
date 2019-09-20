import React from 'react';
import PropTypes from 'prop-types';
import styles from './Btn.module.css';

const Btn = ({
  clicked, btnType, children, disabled,
}) => (
  <button
    disabled={disabled}
    onClick={clicked}
    className={[styles.Button, styles[btnType]].join((' '))}
  >
    {children}
  </button>
);

Btn.propTypes = {
  clicked: PropTypes.func,
  btnType: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default Btn;
