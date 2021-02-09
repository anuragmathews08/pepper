import React from 'react';
import classes from './LoginButton.module.css';

const LoginButton = (props) => {
    return (
        <div className={classes.buttonBlock} onClick={props.click}>
            <img src={props.logingBt} alt=""/>
            <p className={classes.loginHeading}>{props.children}</p>
        </div>
    )
}

export default LoginButton;
