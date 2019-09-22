import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props =>{
    // key() return an array
    let transformedIngredients=Object.keys(props.ingredients)
        .map(igKey => {
            // create Array Array()
            // console.log(igKey); salad  bacon cheese meat
            // console.log(props.ingredients[igKey]); 1 1 2 2
            console.log("props.ingredients[igKey]"+props.ingredients[igKey]);
            return [...Array(props.ingredients[igKey] )].map((_, index) =>{
                 console.log(igKey );
                console.log("length-"+Array(props.ingredients[igKey]).length);
                return <BurgerIngredient key ={igKey +index} type ={igKey}/>;
            });//[,]
        }).reduce((aar, el) => {
            //console.log(aar.concat(el));

            return aar.concat(el);
        }, []);

    if(transformedIngredients.length===0){
        transformedIngredients = <p> Please start adding ingredients</p>;
    }
    console.log(transformedIngredients);
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