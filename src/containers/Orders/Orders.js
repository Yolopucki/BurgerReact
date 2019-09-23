import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";

class Orders extends Component {
	state = {
		orders: null,
		// loading: true,
	};

	componentDidMount() {
		axios.get("/orders.json")
			.then((response) => {
				const fetchedOrders = [];
				for (const key in response.data) {
					fetchedOrders.push({
						...response.data[key],
						id: key,
					});
				}
				this.setState({ orders: fetchedOrders });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		const { orders } = this.state;
		return (
			<div style={ { marginTop: "100px" } }>
				{ orders && orders.map((order) => (
					<Order key={ order.id } ingredients={ order.ingredients } price={ +order.price } />
				)) }
			</div>
		);
	}
}

export default withErrorHandler(Orders, axios);
