import React from 'react';
import Aux from '../../../hoc/Aux'

const orderSummary = ( props ) => {

    const IngredientsSummary = Object.keys(props.ingredients)
    .map((igkey) => {
        return (<li key={igkey}>
            <span style={{textTransform: 'capitalize'}}>{igkey} : </span>
            {props.ingredients[igkey]}
        </li>);
        
    })
    return (
        <Aux> 
            <div>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following ingredients:</p>
                <ul>
                    {IngredientsSummary}        
                </ul>
                <p>Continue to checkout?</p>
            </div>
        </Aux>
    )
}

export default orderSummary;