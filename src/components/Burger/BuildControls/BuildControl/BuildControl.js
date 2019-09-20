import React from 'react';
import ProTypes from 'prop-types';

import styles from './BuildControl.module.css';

const BuildControl = ({
  label, add, remove, disabled,
}) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{label}</div>
    <button
      className={styles.Less}
      onClick={remove}
      disabled={disabled}
    >
Less
    </button>
    <button
      className={styles.More}
      onClick={add}
    >
More
    </button>
  </div>
);
BuildControl.propTypes = {
  label: ProTypes.string,
  add: ProTypes.func,
  remove: ProTypes.func,
  disabled: ProTypes.bool,
};

export default BuildControl;
