import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";
import { createPortal } from 'react-dom';
import React from "react";

const Backdrop = (props) => {
    return (<div
        className={classes.backdrop}
        onClick={props.onConfirm} />);
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <button onClick={props.onConfirm}>Okay</button>
            </footer>
        </Card>
    );
};
const ErrorModal = (props) => {

    return (

        <React.Fragment>
            {createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {createPortal(
                <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
                document.getElementById('overlay-root')
            )}

        </React.Fragment>

    );
};

export default ErrorModal;