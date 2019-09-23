import React from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux/Aux";
import Btn from "../../UI/Btn/Btn";

const OrderSummary = ({
	ingredients, modalClosed, purchaseContinue, price,
}) => {
	const ingredientSummary = Object.keys(ingredients)
		.map((igKey, i) => (
			<li key={ igKey + i }>
				<span style={ { textTransform: "capitalize" } }>
					{ igKey }
				</span>
            :
				{ ingredients[igKey] }
			</li>
		));
	return (
		<Aux>
			<h3>your order</h3>
			<p>a delicious burger</p>
			<ul>{ ingredientSummary }</ul>
			<p style={ { fontWeight: "bold" } }>
                Total price is:
				{ price.toFixed(2) }
				$
			</p>
			<p>Continue to Checkout?</p>
			<Btn
				btnType="Success"
				clicked={ purchaseContinue }
			>
			Continue
			</Btn>
			<Btn
				btnType="Danger"
				clicked={ modalClosed }
			>
Cancel
			</Btn>
		</Aux>
	);
};


OrderSummary.propTypes = {
	ingredients: PropTypes.object.isRequired,
	modalClosed: PropTypes.func.isRequired,
	purchaseContinue: PropTypes.func.isRequired,
	price: PropTypes.number.isRequired,
};

export default OrderSummary;
