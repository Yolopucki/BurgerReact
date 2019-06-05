import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import Spinner from '../../components/UI/Spinner/Spinner';


class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients, price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div style={{marginTop: '100px'}}>
                {this.state.ingredients && this.state.price && <CheckoutSummary
                    ingredients={this.state.ingredients} checkoutContinue={this.checkoutContinueHandler}
                    checkoutCancelled={this.checkoutCancelledHandler}
                />}
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => {
                        return <ContactData {...props} ingredients={this.state.ingredients}
                                            price={this.state.price}
                        />;
                    }
                    }
                />

            </div>
        );
    }
}

export default Checkout;
