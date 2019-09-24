import React from "react";
import PropTypes from "prop-types";

import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const controls = [
	{
		label: "Salad",
		type: "salad",
	},
	{
		label: "Bacon",
		type: "bacon",
	},
	{
		label: "Cheese",
		type: "cheese",
	},
	{
		label: "Meat",
		type: "meat",
	},
];

const BuildControls = ({
	                       add, remove, disabled, price, purchasable, purchase,
}) => (
	<div className={ styles.BuildControls }>
		<p>
			Current price:
			{ price.toFixed(2) }
			$
		</p>
		{ controls.map(ingredient => (
			<BuildControl
				key={ ingredient.label }
				label={ ingredient.label }
				add={ () => add(ingredient.type) }
				remove={ () => remove(ingredient.type) }
				disabled={ disabled[ingredient.type] }
			/>
		)) }
		<button
			className={ styles.OrderButton }
			disabled={ !purchasable }
			onClick={ purchase }
		>
			Order now
		</button>
	</div>
);

BuildControl.propTypes = {
	add: PropTypes.func,
	remove: PropTypes.func,
	disabled: PropTypes.bool,
};

export default BuildControls;
