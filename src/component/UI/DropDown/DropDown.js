import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./DropDown.module.css";

const DropDown = (props) => {
  let dropDownClass = [classes.dropDown__block];
  if (props.showMenu) {
    dropDownClass.push(classes.menuVisible);
  }
  return (
    <div className={dropDownClass.join(" ")}>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={classes.active} className={classes.navLink} onClick={props.menuClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/addevent" activeClassName={classes.active} className={classes.navLink}  onClick={props.menuClick}>Add Event</NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName={classes.active} className={classes.navLink}  onClick={props.menuClick}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName={classes.active} className={classes.navLink}  onClick={props.btnClick}>Log Out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
