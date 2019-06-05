import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {
    const {ingredients, price} = props;

    let ingredientsArray = [];
    for(let ingredientName in ingredients){
        ingredientsArray.push({
            name: ingredientName,
            amount: ingredients[ingredientName]
        })
    }
    const ingredientOutput = ingredientsArray.map(ig=>{
        return <span key={ig.name} style={{
            textTransform:'capitalize',
            border:'1px solid black',
            display:'inline-block',
            margin: '0 8px'
        }}>{ig.name} {ig.amount}</span>
    });
    return (
        <div className={classes.Order}>

            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>{price.toFixed(2)}</strong> $</p>

        </div>
    );
};

export default Order;
