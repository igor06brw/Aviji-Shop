import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './containers/App';
// CREATE REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";

// ENHANCING STORE WITH FIREBASE
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from "./firebase/config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase }))
  )
)
export const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

const app = (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
