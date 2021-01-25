import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    let buttonStyle = [classes.button__block];
    if(props.disable) {
        buttonStyle.push(classes.button__disabled)
    }

    return (
        <button className={buttonStyle.join(" ")} disabled={props.disable} onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button;
