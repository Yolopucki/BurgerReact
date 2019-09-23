import React from "react";

import Burger from "../../Burger/Burger";
import Btn from "../../UI/Btn/Btn";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({ ingredients, checkoutCancelled, checkoutContinue }) => (
	<div className={ classes.CheckoutSummary }>
		<h1>we hope it tastes well</h1>
		<div style={ { width: "100%", margin: "auto" } }>
			<Burger ingredients={ ingredients } />
		</div>
		<Btn btnType="Danger" clicked={ checkoutCancelled }>CANCEL</Btn>
		<Btn btnType="Success" clicked={ checkoutContinue }>CONTINUE</Btn>
	</div>
);

export default CheckoutSummary;
