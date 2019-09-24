import React, { Component } from "react";
import axios from "../../../axios-orders";


import Btn from "../../../components/UI/Btn/Btn";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Your name",
				},
				value: "",
				validation: {
					required: true,
					minLength: 3,
				},
				valid: false,
				touched: false,
			},
			street: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "street",
				},
				value: "",
				validation: {
					required: true,
					minLength: 3,
				},
				valid: false,
				touched: false,
			},
			country: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "country",
				},
				value: "",
				validation: {
					required: true,
					minLength: 4,
				},
				valid: false,
				touched: false,
			},
			email: {
				elementType: "input",
				elementConfig: {
					type: "email",
					placeholder: "email",
				},
				value: "",
				validation: {
					required: true,
					minLength: 6,
				},
				valid: false,
				touched: false,
			},
			zipCode: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "zip",
				},
				value: "",
				validation: {
					required: true,
					minLength: 4,
					maxLength: 6,
				},
				valid: false,
				touched: false,
			},
			deliveryMethod: {
				elementType: "select",
				elementConfig: {
					options: [
						{
							value: "fastest",
							displayValue: "Fastest",
						},
						{
							value: "cheapest",
							displayValue: "Cheapest",
						},
					],
				},
				value: "fastest",
				validation: {},
				valid: true,
			},
		},
		formIsValid: false,
		loading: false,
	};

	orderHandler = e => {
		const { orderForm } = this.state;
		const { ingredients, price, history } = this.props;
		e.preventDefault();
		this.setState({ loading: true });
		const formData = {};
		for (const formElementIdentifier in orderForm) {
			formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
		}
		const order = {
			ingredients,
			price,
			orderData: formData,
		};

		axios.post("/orders.json", order)
			.then(() => {
				this.setState({ loading: false });
				history.push("/");
			})
			.catch(() => {
				this.setState({ loading: false });
			});
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const { orderForm } = this.state;
		const updatedOrderFrom = { ...orderForm };
		const updatedFormElement = { ...updatedOrderFrom[inputIdentifier] };
		/* as we want to change updated only value
		is this a deep clone we do not change config in here */
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value,
			updatedFormElement.validation);
		updatedFormElement.touched = true;
		updatedOrderFrom[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (const inputIdentifier in updatedOrderFrom) {
			formIsValid = updatedOrderFrom[inputIdentifier].valid && formIsValid;
		}
		this.setState({
			orderForm: updatedOrderFrom,
			formIsValid,
		});
	};

	checkValidity = (value, rules) => {
		let isValid = true;
		if (rules.required) {
			isValid = value.trim() !== "" && isValid;
		}
		// and many many other which we may implement
		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}
		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}
		return isValid;
	};

	render() {
		const { orderForm, formIsValid, loading } = this.state;
		// transforming from object to an array
		const formElementArray = [];
		for (const key in orderForm) {
			formElementArray.push({
				id: key,
				config: orderForm[key],
			});
		}
		let form = (
			<form onSubmit={ this.orderHandler }>
				{ formElementArray.map(formElement => (
					<Input
						elementType={ formElement.config.elementType }
						elementConfig={ formElement.config.elementConfig }
						value={ formElement.config.value }
						key={ formElement.id }
						changed={ event => this.inputChangedHandler(event, formElement.id) }
						invalid={ !formElement.config.valid }
						// if no validation in config then false will be sent
						shouldValidate={ formElement.config.validation }
						touched={ formElement.config.touched }
					/>
				)) }
				<Btn btnType="Success" disabled={ !formIsValid }>Order</Btn>
			</form>
		);
		if (loading) {
			form = <Spinner />;
		}
		return (
			<div className={ classes.ContactData }>
				{ form }
			</div>
		);
	}
}

export default ContactData;
