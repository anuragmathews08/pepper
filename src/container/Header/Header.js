import React, { useState } from "react";
import NavBar from "../../component/NavBar/NavBar";
import BackDrop from "../../component/UI/BackDrop/BackDrop";
import DropDown from "../../component/UI/DropDown/DropDown";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/actions";

function Header(props) {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  let backDrop = toggle ? <BackDrop /> : null;


  return (
    <>
      <NavBar menuClick={toggleHandler} showMenu={toggle} btnClick={() => props.usrSignOut()}/>
      <DropDown showMenu={toggle} menuClick={toggleHandler} btnClick={() => props.usrSignOut()}/>
      {backDrop}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    usrSignOut : () => dispatch(actionCreators.userSignOut())
  }
}

export default connect(null, mapDispatchToProps)(Header);
