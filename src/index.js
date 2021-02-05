import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import eventDetailReducer from "./store/reducers/eventDetails";
import eventListReducer from "./store/reducers/eventList";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import {
  firestoreReducer,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import { firebaseReducer, getFirebase } from "react-redux-firebase";
import firebaseApp from "./firebase";

const rootReducer = combineReducers({
  evDetails: eventDetailReducer,
  evList: eventListReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseApp)
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
