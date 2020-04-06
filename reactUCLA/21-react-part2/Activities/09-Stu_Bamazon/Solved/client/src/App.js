import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Admin from "./components/pages/Admin.js";
import Home from "./components/pages/Home.js";
import Product from "./components/pages/Product.js";

const App = () => (
  <Router>
    <div className="container">
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/product/:id" component={Product} />
    </div>
  </Router>
);

export default App;
