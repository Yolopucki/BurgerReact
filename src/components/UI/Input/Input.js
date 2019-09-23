import React from "react";
import classes from "./Input.module.css";

const Input = ({
	invalid, shouldValidate, touched, elementType, changed, elementConfig, value, label,
}) => {
	const inputClasses = [classes.InputElement];
	let inputElement = null;

	if (invalid && shouldValidate && touched) {
		inputClasses.push(classes.Invalid);
	}
	switch (elementType) {
		case "input":
			// adding props add us possibility to give any attributes which we catullay want
			inputElement = <input className={ inputClasses.join(" ") } { ...elementConfig } value={ value } onChange={ changed } />;
			break;
		case "textarea":
			inputElement = <textarea className={ inputClasses.join(" ") } { ...elementConfig } value={ value } onChange={ changed } />;
			break;
		case "select":
			inputElement = (
				<select className={ inputClasses.join(" ") } value={ value } onChange={ changed }>
					{elementConfig.options.map((option) => (
						<option key={ option.value } value={ option.value }>{option.displayValue}</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = <input className={ inputClasses.join(" ") } { ...elementConfig } value={ value } />;
	}
	return (
		<div className={ classes.Input }>
			<label className={ classes.Label }>{label}</label>
			{inputElement}
		</div>
	);
};

export default Input;
