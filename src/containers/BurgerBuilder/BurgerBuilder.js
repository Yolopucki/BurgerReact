import React, { Component } from "react";

import axios from "../../axios-orders";
import Aux from "../../hoc/Aux/Aux";
import withErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.4,
	bacon: 0.9,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchasable: false,
		purchaseMode: false,
		// for spinner displaying
		loading: false,
		error: false,
	};

	componentDidMount() {
		this.setState({ loading: true });
		axios.get("https://react-my-burger-c67a2.firebaseio.com/ingredients.json")
			.then((res) => {
				this.setState({
					ingredients: res.data,
					loading: false,
				});
			})
			.catch((error) => {
				this.setState({ error });
			});
	}

	addIngredientHandler = (type) => {
		const { ingredients, totalPrice } = this.state;
		const oldCount = ingredients[type];
		const updatedCount = oldCount + 1;
		const upgradedIngredient = {
			...ingredients,
		};
		upgradedIngredient[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			ingredients: upgradedIngredient,
			totalPrice: newPrice,
		});
		this.updatePurchaseState(upgradedIngredient);
	};

	removeIngredientHandler = (type) => {
		const { ingredients, totalPrice } = this.state;
		const oldCount = ingredients[type];
		const updatedCount = oldCount - 1;
		const upgradedIngredient = {
			...ingredients,
		};
		upgradedIngredient[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = totalPrice;
		const newPrice = oldPrice - priceAddition;
		this.setState({
			ingredients: upgradedIngredient,
			totalPrice: newPrice,
		});
		this.updatePurchaseState(upgradedIngredient);
	};

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map((igKey) => ingredients[igKey])
			.reduce((acc, cur) => acc + cur,
				0);
		this.setState({ purchasable: sum > 0 });
	};

	purchaseHandler = () => {
		this.setState({ purchaseMode: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchaseMode: false });
	};

	purchaseContinueHandler = () => {
		const { ingredients, totalPrice } = this.state;
		const { history } = this.props;
		const queryParam = [];
		for (const i in ingredients) {
			queryParam.push(`${encodeURI(i)}=${encodeURI(ingredients[i])}`);
		}
		queryParam.push(`price=${totalPrice}`);
		const queryString = queryParam.join("&");
		history.push({
			pathname: "/checkout",
			search: `?${queryString}`,
		});
	};

	render() {
		const {
			totalPrice, ingredients, purchasable, purchaseMode, loading, error,
		} = this.state;
		const disabledInfo = { ...ingredients };
		for (const key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		let orderSummary = null;
		let burger = error
			?			<p style={ { marginTop: "30px" } }>ingredients can&apos;t be loaded</p>
			:			<Spinner />;
		if (ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={ ingredients } />
					<BuildControls
						add={ this.addIngredientHandler }
						remove={ this.removeIngredientHandler }
						disabled={ disabledInfo }
						price={ totalPrice }
						purchasable={ purchasable }
						purchase={ this.purchaseHandler }
					/>
				</Aux>
			);
			orderSummary = (
				<OrderSummary
					ingredients={ ingredients }
					modalClosed={ this.purchaseCancelHandler }
					purchaseContinue={ this.purchaseContinueHandler }
					price={ totalPrice }
				/>
			);
		}
		if (loading) {
			orderSummary = <Spinner />;
		}
		return (
			<Aux>
				<Modal
					show={ purchaseMode }
					modalClosed={ this.purchaseCancelHandler }
				>
					{ " " }
					{ orderSummary }
				</Modal>
				{ burger }
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
