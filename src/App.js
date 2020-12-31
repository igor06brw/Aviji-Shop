import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';
import ProductDetail from "./components/Products/ProductDetails/ProductDetails";
import Products from './components/Products/Products';
import Auth from "./components/Auth/Auth";
import Layout from "./Layout/Layout";


class App extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Layout>
              <Switch>
                <Route exact path="/" component={Products} />
                <Route path="/product-detail" component={ProductDetail} />
                <Redirect from="/register" to="/auth" />
                <Redirect from="/login" to="/auth"  />
                <Route path="/auth" component={Auth} />
              </Switch>
            </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
