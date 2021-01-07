import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';
import ProductDetail from "./components/Products/ProductDetails/ProductDetails";
import Products from './components/Products/Products';
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shopping from "./components/Shopping/Shopping";


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="App">
          <Header></Header>
              <Switch>
                <Route exact path="/" component={Products} />
                <Route path="/product-detail" component={ProductDetail} />
                <Route path="/auth" component={Auth} />
                <Route path="/shopping" component={Shopping} />
              </Switch>
              <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
