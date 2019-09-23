import React from "react";
import PropTypes from "prop-types";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../navigation/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = ({ showSideDrawer }) => (
	<header className={ styles.ToolBar }>
		<DrawerToggle clicked={ showSideDrawer } />
		<div className={ styles.LogoToolbar }>
			<Logo />
		</div>
		<nav>
			<NavigationItems />
		</nav>
	</header>
);

Toolbar.propTypes = {
	showSideDrawer: PropTypes.func,
};


export default Toolbar;
