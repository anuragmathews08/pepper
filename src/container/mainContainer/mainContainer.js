import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ChooseEvent from "../AddEvent/ChooseEvent/ChooseEvent";
import EnterEvent from "../AddEvent/EnterEvent/EnterEvent";
import Home from "../Home/Home";
import Header from "../Header/Header";

function mainContainer() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/addevent/choose" component={ChooseEvent} />
        <Route path="/addevent/details" component={EnterEvent} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default mainContainer;
