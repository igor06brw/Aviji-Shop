import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import ProductDetail from "./components/Products/ProductDetails/ProductDetails";
import Products from './components/Products/Products';
import Footer from "./components/Footer";
import Auth from "./components/Auth/Auth";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/product-detail" component={ProductDetail} />
          <Redirect from="/register" to="/auth" />
          <Redirect from="/login" to="/auth" />
          <Route path="/auth" component={Auth} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
