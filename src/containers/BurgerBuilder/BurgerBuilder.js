import React, {Component} from 'react';

import axios from '../../axios-orders';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';


const INGREDIENT_PRICES = {
    'salad': .5,
    'cheese': .4,
    'meat': 1.4,
    'bacon': .9
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchaseMode: false,
        // for spinner displaying
        loading: false,
        error: false
    };
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const upgradedIngredient = {
            ...this.state.ingredients,
        };
        upgradedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients: upgradedIngredient, totalPrice: newPrice});
        this.updatePurchaseState(upgradedIngredient);
    };
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const upgradedIngredient = {
            ...this.state.ingredients,
        };
        upgradedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ingredients: upgradedIngredient, totalPrice: newPrice});
        this.updatePurchaseState(upgradedIngredient);
    };
    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, cur) => sum + cur
                , 0);
        this.setState({purchasable: sum > 0});
    };
    purchaseHandler = () => {
        this.setState({purchaseMode: true});
    };
    purchaseCancelHandler = () => {
        this.setState({purchaseMode: false});
    };
    purchaseContinueHandler = () => {

        const queryParam = [];
        for (let i in this.state.ingredients) {
            queryParam.push(encodeURI(i) + '=' + encodeURI(this.state.ingredients[i]));
        }
        queryParam.push('price=' + this.state.totalPrice);
        const queryString = queryParam.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };

    componentDidMount() {
        this.setState({loading: true});
        axios.get('https://react-my-burger-c67a2.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({ingredients: res.data, loading: false});
            })
            .catch(error => {
                this.setState({error: error});
            });
    }

    render() {
        const {totalPrice, ingredients, purchasable, purchaseMode, loading} = this.state;
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.state.error ? <p style={{marginTop: '30px'}}>ingredients can't be loaded</p> : <Spinner/>;
        if (ingredients) {
            burger = <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={totalPrice}
                    purchasable={purchasable}
                    purchase={this.purchaseHandler}
                />
            </Aux>;
            orderSummary = <OrderSummary
                ingredients={ingredients}
                modalClosed={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                price={totalPrice}
            />;
        }
        if (loading) {
            orderSummary = <Spinner/>;
        }
        return (
            <Aux>
                <Modal
                    show={purchaseMode}
                    modalClosed={this.purchaseCancelHandler}
                > {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
