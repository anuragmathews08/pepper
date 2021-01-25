import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";
import PepperLogo from "../../assets/icons/Pepper.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function NavBar(props) {
  let toggleIcon = props.showMenu ? (
    <CloseIcon className={classes.MenuIcon} onClick={props.menuClick} />
  ) : (
    <MenuIcon className={classes.MenuIcon} onClick={props.menuClick} />
  );

  return (
    <div className={classes.navBlock}>
      <div className={classes.navBlock__logo}>
        <NavLink to="/" className={classes.pepperLogo}>
          <img src={PepperLogo} alt="Pepper" />
        </NavLink>
      </div>
      <div className={classes.navBlock__links}>
        <ul>
          <li className={classes.navBlock__navLinks}>
            <NavLink
              to="/"
              exact
              activeClassName={classes.active}
              className={classes.navLink}
            >
              Home
            </NavLink>
          </li>
          <li className={classes.navBlock__navLinks}>
            <NavLink
              to="/addevent"
              activeClassName={classes.active}
              className={classes.navLink}
            >
              Add Event
            </NavLink>
          </li>
          <li className={classes.navBlock__navLinks}>
            <NavLink
              to="/login"
              activeClassName={classes.active}
              className={classes.navLink}
            >
              Log Out
            </NavLink>
          </li>
          <li className={classes.navBlock__toggleIcon}>
            {toggleIcon}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
