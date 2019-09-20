import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import Spinner from '../../components/UI/Spinner/Spinner';


class Checkout extends Component {
    state = {
      ingredients: null,
      price: 0,
    };

    componentDidMount() {
      const { location } = this.props;
      const query = new URLSearchParams(location.search);
      const ingredients = {};
      let price = 0;
      for (const param of query.entries()) {
        if (param[0] === 'price') {
          price = param[1];
        } else {
          ingredients[param[0]] = +param[1];
        }
      }
      this.setState({ ingredients, price });
    }

    checkoutCancelledHandler = () => {
      this.props.history.goBack();
    };

    checkoutContinueHandler = () => {
      this.props.history.replace('/checkout/contact-data');
    };

    render() {
      const { ingredients, price } = this.state;
      const { match } = this.props;
      return (
        <div style={{ marginTop: '100px' }}>
          {ingredients && price && (
          <CheckoutSummary
            ingredients={ingredients}
            checkoutContinue={this.checkoutContinueHandler}
            checkoutCancelled={this.checkoutCancelledHandler}
          />
          )}
          <Route
            path={`${match.path}/contact-data`}
            render={(props) => (
              <ContactData
                {...props}
                ingredients={ingredients}
                price={price}
              />
            )}
          />
        </div>
      );
    }
}

export default Checkout;
