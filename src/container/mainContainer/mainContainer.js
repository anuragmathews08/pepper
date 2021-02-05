import React, {useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ChooseEvent from "../AddEvent/ChooseEvent/ChooseEvent";
import EnterEvent from "../AddEvent/EnterEvent/EnterEvent";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Login from "../Login/Login";

function MainContainer() {
  const [user, ] = useState(false);
  let routes = user ? (
    <>
    <Header /> 
    <Route path="/addevent/details" exact component={EnterEvent} />
    <Route path="/addevent" exact  component={ChooseEvent} />
    <Route path="/" exact component={Home} /> 
    </>
    ) : <Route path="/login" component={Login} />
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default MainContainer;
