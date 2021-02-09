import React, { useEffect } from "react";
import PepperLogoDark from "../../assets/icons/Pepper-dark.png";
import LoginButton from "../../component/LoginButton/LoginButton";
import GoogleIcon from "../../assets/icons/google-icon-white.svg";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actions";
import { withRouter } from "react-router-dom";
import classes from "./Login.module.css";

const Login = (props) => {
  const loginBtnHandler = () => {
    props.usrLogin();
  };

  useEffect(() => {
    if (props.usrName) {
      props.history.push("/");
    }
  }, [props.usrName, props.history]);

  return (
    <div className={classes.loginBlock}>
      <div className={classes.loginBlock__google}>
        <img src={PepperLogoDark} alt="Pepper" className={classes.pepperLogo} />
        <LoginButton logingBt={GoogleIcon} click={() => loginBtnHandler()}>
          Login with Google
        </LoginButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usrName: state.userDetails.user.userName,
  };
};

const mapDispatachToProps = (dispatch) => {
  return {
    usrLogin: () => dispatch(actionCreators.userLoginGoogle()),
  };
};

export default connect(mapStateToProps, mapDispatachToProps)(withRouter(Login));
