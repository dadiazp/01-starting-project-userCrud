import React from "react";

import classes from './Button.module.css';

const Button = props => {
    return (
        // Si props.type es undefined entonces el tipo sera button
        <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;