import React from 'react';

import styles from './SideDrawer.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../navigation/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const SideDrawer = ({showSideDrawer, closeSideDrawer}) => {
  return (
    <Aux>
      <Backdrop
        show={showSideDrawer}
        clicked={closeSideDrawer}/>
      <div className={[styles.SideDrawer, showSideDrawer ? styles.Open : styles.Close].join(' ')}>
        <div className={styles.LogoSideDrawer}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  );
};


export default SideDrawer;
