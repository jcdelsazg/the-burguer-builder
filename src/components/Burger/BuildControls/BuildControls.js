import React from 'react';
import classes from './BuildControls.css'
import BuildControl from'./BuildControl/BuildControl'

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" }
];

const buildControls = (props) => {

    return(
        <div className={classes.BuildControls}>
            <p>Current prize: <strong>{props.prize}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl 
                            key={ctrl.label} 
                            label={ctrl.label} 
                            ingredientAdded={() => props.ingredientAdded(ctrl.type)}
                            ingredientRemoved={() => props.ingredientRemoved(ctrl.type)}
                            disabled={props.disabled[ctrl.type]} 
                        />;
            })}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    );
};

export default buildControls;