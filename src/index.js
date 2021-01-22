import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min';
import App from './containers/App';
import configureStore from "./store/configure-store";
import OutfitAPI from './store/data/API'
import { Provider } from 'react-redux';


const store = configureStore(OutfitAPI);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
