import React from 'react';

function Car(props) {
    return (
        <div className="car" style={{ border: `2px solid ${props.borderColor}` }}> 
            <img src={props.image} alt={props.brand} />
            <h2>{props.brand}</h2>
            <p>Model: {props.model}</p>
            <p>Color: {props.color}</p>
            <p>price: {props.price}</p>
            
        </div>
    );
}

export default Car;

