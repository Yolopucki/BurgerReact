import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import styles from './App.module.css';
import Layout from './Layout/Layout';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import Orders from './Orders/Orders';

class App extends React.Component {
    state = {
        show: true
    };

    render() {
        return (
            <BrowserRouter>
                <div className={styles.App}>
                    <Layout>
                        <Switch>
                            <Route path='/orders' component={Orders}/>
                            <Route path='/checkout' component={Checkout}/>
                            <Route path='/' component={BurgerBuilder}/>
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>

        );
    }


}

export default App;
