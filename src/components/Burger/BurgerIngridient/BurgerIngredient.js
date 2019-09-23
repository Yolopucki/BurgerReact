import React from "react";
import PropTypes from "prop-types";

import styles from "./BurgerIngredient.module.css";

const BurgerIngredient = (props) => {
	let ingridient = null;
	switch (props.type) {
		case ("bread-bottom"):
			ingridient = <div className={ styles.BreadBottom } />;
			break;
		case ("bread-top"):
			ingridient = (
				<div className={ styles.BreadTop }>
					<div className={ styles.Seeds1 } />
					<div className={ styles.Seeds2 } />
				</div>
			);
			break;
		case ("meat"):
			ingridient = <div className={ styles.Meat } />;
			break;
		case ("cheese"):
			ingridient = <div className={ styles.Cheese } />;
			break;
		case ("bacon"):
			ingridient = <div className={ styles.Bacon } />;
			break;
		case ("salad"):
			ingridient = <div className={ styles.Salad } />;
			break;
		default:
			ingridient = null;
			break;
	}
	return ingridient;
};
BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired,
};
export default BurgerIngredient;
