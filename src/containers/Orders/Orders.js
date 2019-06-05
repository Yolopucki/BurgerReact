import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';


class Orders extends Component {
    state = {
        orders: null,
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({...response.data[key], id: key});
                }
                console.log(fetchedOrders);
                this.setState({orders: fetchedOrders});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div style={{marginTop: '100px'}}>
                {this.state.orders && this.state.orders.map(order => {
                    return <Order key={order.id} ingredients={order.ingredients} price={+order.price}/>;
                })}

            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
