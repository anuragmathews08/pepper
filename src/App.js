import MainContainer from "./container/mainContainer/mainContainer";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <MainContainer />
    </BrowserRouter>
  );
}

export default App;
