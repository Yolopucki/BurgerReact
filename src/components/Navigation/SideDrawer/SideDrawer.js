import React from 'react';
import PropTypes from 'prop-types'

import styles from './SideDrawer.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../navigation/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

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
SideDrawer.propTypes = {
  showSideDrawer: PropTypes.bool,
  closeSideDrawer: PropTypes.func
}

export default SideDrawer;
