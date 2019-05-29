import React from 'react';

import styles from './Toolbar.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../navigation/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
  return (
    <header className={styles.ToolBar}>
      <DrawerToggle clicked={props.showSideDrawer}/>
      <div className={styles.LogoToolbar}>
        <Logo/>
      </div>

      <nav>
        <NavigationItems/>
      </nav>

    </header>
  );
};


export default Toolbar;
