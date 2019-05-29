import React from 'react';
import PropTypes from 'prop-types'


import Aux from '../../hoc/Aux';
import styles from './Layout.module.css'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

class Layout extends React.Component {
  state = {
    showSideDrawer: true
  };
  SideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  };
  SideDrawerShowHandler = () => {
    this.setState((prevState, props) => {
        return {showSideDrawer: !prevState.showSideDrawer}
      }
    )
  };

  render() {
    const {showSideDrawer} = this.state;
    const {children} = this.props;
    return (
      <Aux>
        <Toolbar showSideDrawer={this.SideDrawerShowHandler}/>
        <SideDrawer
          showSideDrawer={showSideDrawer}
          closeSideDrawer={this.SideDrawerClosedHandler}/>
        <main className={styles.Content}>{children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Layout;

