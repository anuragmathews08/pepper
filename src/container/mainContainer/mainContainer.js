import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ChooseEvent from "../AddEvent/ChooseEvent/ChooseEvent";
import EnterEvent from "../AddEvent/EnterEvent/EnterEvent";
import Home from "../Home/Home";
import Header from "../Header/Header";

function mainContainer() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/addevent/details" exact component={EnterEvent} />
      <Route path="/addevent" exact  component={ChooseEvent} />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default mainContainer;
