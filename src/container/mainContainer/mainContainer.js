import React, { useEffect, useRef } from "react";
import { withRouter, Route } from "react-router-dom";

import ChooseEvent from "../AddEvent/ChooseEvent/ChooseEvent";
import EnterEvent from "../AddEvent/EnterEvent/EnterEvent";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Login from "../Login/Login";
import { auth } from "../../firebase";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/actions";

function MainContainer(props) {;
  let routes = useRef();
  const {history, setUser} = props;
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        routes.current = (
          <>
            <Header />
            <Route path="/addevent/details" exact component={EnterEvent} />
            <Route path="/addevent" exact component={ChooseEvent} />
            <Route path="/" exact component={Home} />
          </>
        );
        history.replace("/");
        setUser();
      } else {
        routes.current = <Route path="/login" component={Login} />;
        history.replace("/login");
      }
    });
  },[history, setUser]);


  return <>{routes.current}</>;
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: () => dispatch(actionCreators.setUser())
  };
};


export default connect(null,mapDispatchToProps)(withRouter(MainContainer));
