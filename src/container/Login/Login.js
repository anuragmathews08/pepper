import React from 'react';
import PepperLogoDark from "../../assets/icons/Pepper-dark.png";
import LoginButton from "../../component/LoginButton/LoginButton";
import GoogleIcon from "../../assets/icons/google-icon-white.svg";

import classes from './Login.module.css';

const Login = (props) => {
    return (
        <div className={classes.loginBlock}>
            <div className={classes.loginBlock__google}>
                <img src={PepperLogoDark} alt="Pepper" className={classes.pepperLogo}/>
                <LoginButton logingBt={GoogleIcon}>Login with Google</LoginButton>
            </div>
        </div>
    )
}

export default Login;
