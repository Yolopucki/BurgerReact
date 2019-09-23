import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Layout from "./Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Checkout from "./Checkout/Checkout";
import Orders from "./Orders/Orders";

const App = () => (
	<BrowserRouter>
		<div className={ styles.App }>
			<Layout>
				<Switch>
					<Route path="/orders" component={ Orders } />
					<Route path="/checkout" component={ Checkout } />
					<Route path="/" component={ BurgerBuilder } />
				</Switch>
			</Layout>
		</div>
	</BrowserRouter>
);


export default App;
