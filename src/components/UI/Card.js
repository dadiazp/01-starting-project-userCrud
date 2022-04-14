import React from "react";

import classes from './Card.module.css';

const Card = props => {
    return (
        // Recuerda, al usar una clase de css en un componente creado por mi se debe indicar mediante props
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;
