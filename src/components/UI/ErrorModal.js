import React from "react";
import ReactDOM  from "react-dom";

import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = props => {
    return (
        <div onClick={props.onCloseModal} className={classes.backdrop}></div>
    );
}

const Overlay = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onCloseModal}>Okay</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = props => {
    return (
        <div>
            {/* Esto es un portal. Es usado para renderizar en un sitio distinto del dom algun elemento anidado
            Bastante util para cuando se trabaja con modals, los cuales siempre deberian de estar renderizados de primero
            Se debe importar react-dom para luego utilizar el metodo createPortal, el cual recibe el elemento que se desea renderizar
            y el sitio donde se desea mover esa renderizacion en el dom, en este caso, ambos sitios están en el index.html */}
            {ReactDOM.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Overlay title={props.title} message={props.title} onCloseModal={props.onCloseModal}/>, document.getElementById('overlay-root'))}
        </div>
    );
}

export default ErrorModal;