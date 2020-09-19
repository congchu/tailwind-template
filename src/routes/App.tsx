import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";

const Root = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={Home} />
  </BrowserRouter>
);

export default Root;
