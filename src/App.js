import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import ProductDetail from "./components/Products/ProductDetails/ProductDetails";
import Products from './components/Products/Products';
import Login from './components/Login';
import Register from './components/Register';
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/product-detail" component={ProductDetail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
