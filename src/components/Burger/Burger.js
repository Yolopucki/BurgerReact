import React from "react";
import { withRouter } from "react-router-dom";

import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngridient/BurgerIngredient";

const Burger = (props) => {
	const { ingredients } = props;
	let transformedIngredients = Object.keys(ingredients)
		.map((igKey) => [...Array(ingredients[igKey])]
			.map((_, i) => <BurgerIngredient type={ igKey } key={ igKey + i } />))
		.reduce((arr, el) => arr.concat(el), []);
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>please start adding ingredients</p>;
	}
	return (
		<div className={ styles.Burger }>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default withRouter(Burger);
