import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngridient/BurgerIngredient'

const Burger = ({ingredients}) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(igKey=>{
      return [...Array(ingredients[igKey])].map((_,i)=>{
       return  <BurgerIngredient type={igKey} key={igKey+i}/>
      })
    })
    .reduce((arr,el)=>{
      return arr.concat(el)
    },[]);
  if(transformedIngredients.length === 0){
    transformedIngredients = <p>please start adding ingredients</p>
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>

    </div>
  );
};

export default Burger;
