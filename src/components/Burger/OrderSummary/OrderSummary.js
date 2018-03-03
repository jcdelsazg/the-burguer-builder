import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../components/UI/Button/Button'

const orderSummary = (props) => {
    
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>:{props.ingredients[igKey]}
                </li>);  
    });

    return(
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Total Price: {props.totalPrice}</p>
            <p>Continue to CheckOut?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContine} btnType="Success">CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;