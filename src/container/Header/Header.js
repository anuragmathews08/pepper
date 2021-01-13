import React, { useState } from "react";
import NavBar from "../../component/NavBar/NavBar";
import BackDrop from "../../component/UI/BackDrop/BackDrop";
import DropDown from "../../component/UI/DropDown/DropDown";

function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  let backDrop = toggle ? <BackDrop /> : null;

  return (
    <>
      <NavBar menuClick={toggleHandler} showMenu={toggle}/>
      <DropDown showMenu={toggle} menuClick={toggleHandler}/>
      {backDrop}
    </>
  );
}

export default Header;
