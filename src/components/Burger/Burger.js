import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngerdient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map(( _, i) => {
                return <BurgerIngredient type={igKey} key={igKey + i} ingredients={igKey}/>;
            });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            { transformedIngredients }
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;