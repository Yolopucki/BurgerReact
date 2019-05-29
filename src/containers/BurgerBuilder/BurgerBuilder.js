import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  'salad': .5,
  'cheese': .4,
  'meat': 1.4,
  'bacon': .9
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {salad: 0, bacon: 0, cheese: 0, meat: 0},
    totalPrice: 4,
    purchasable: false,
    purchaseMode: false
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
    this.setState({purchasable: sum > 0})
  };
  purchaseHandler = () => {
    this.setState({purchaseMode: true})
  };
  purchaseCancelHandler = () => {
    this.setState({purchaseMode: false})
  };
  purchaseContinueHandler = () => {
    alert('yes congrats');
  }

  render() {
    const {totalPrice, ingredients, purchasable, purchaseMode} = this.state;
    const disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={purchaseMode}
          modalClosed={this.purchaseCancelHandler}
        > <OrderSummary
          ingredients={ingredients}
          modalClosed={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          price={totalPrice}/>
        </Modal>
        <Burger ingredients={ingredients}/>
        <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={totalPrice}
          purchasable={purchasable}
          purchase={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
