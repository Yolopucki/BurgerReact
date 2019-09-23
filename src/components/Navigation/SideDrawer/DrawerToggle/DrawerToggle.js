import React from "react";
import PropTypes from "prop-types";

import styles from "./DrawerToggle.module.css";

const DrawerToggle = ({ clicked }) => (
	<div onClick={ clicked } className={ styles.DrawerToggle }>
		<div />
		<div />
		<div />
	</div>
);

DrawerToggle.propTypes = { clicked: PropTypes.func.isRequired };

export default DrawerToggle;
