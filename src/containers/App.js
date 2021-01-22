import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import ProductDetail from "../components/Products/ProductDetails/ProductDetails";
import Products from './Products';
import Auth from "./Auth";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Shopping from "./Shopping";


class App extends Component {
   
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/product-detail" component={ProductDetail} />
              <Route path="/auth" component={Auth} />
              <Route path="/shopping" component={Shopping} />
              <Route path="/product/:id" render={(el) => <ProductDetail {...this.props.outfit.outfits[el.match.params.id]} />}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ outfit: state.outfit })

export default connect(mapStateToProps)(App);
