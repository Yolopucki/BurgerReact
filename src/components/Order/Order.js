import React from "react";
import classes from "./Order.module.css";

const Order = props => {
	const { ingredients, price } = props;

	const ingredientsArray = [];
	for (const ingredientName in ingredients) {
		ingredientsArray.push({
			name: ingredientName,
			amount: ingredients[ingredientName],
		});
	}
	const styles = {
		textTransform: "capitalize",
		border: "1px solid black",
		display: "inline-block",
		margin: "0 8px",
	};
	const ingredientOutput = ingredientsArray.map(ig => (
		<span key={ ig.name } style={ styles }>
			{ ig.name }
			{ " " }
			{ ig.amount }
		</span>
	));
	return (
		<div className={ classes.Order }>
			<p>
				Ingredients:
				{ ingredientOutput }
			</p>
			<p>
				Price:
				<strong>{ price.toFixed(2) }</strong>
				{ " " }
				$
			</p>
		</div>
	);
};

export default Order;
