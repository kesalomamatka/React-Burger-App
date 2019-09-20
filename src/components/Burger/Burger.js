import React, {Component} from 'react';
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props =>{
    // key() return an array
    const transformedIngredients=Object.keys(props.ingredients)
        .map(igKey => {
            // create Array Array()
            return [...Array(props.ingredients[igKey])].map((_, index) =>{
                console.log("---");
                console.log(igKey );
                console.log("---");



                return <BurgerIngredient key ={igKey +1} type ={igKey}/>

            });
            //[,]
        });
    return(
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
          {transformedIngredients}
        {/*<BurgerIngredient type="cheese"/>*/}
        {/*<BurgerIngredient type="meat"/>*/}
        <BurgerIngredient type="bread-bottom"/>
      </div>
    );
}
export default burger;