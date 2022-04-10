import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import App from './containers/App';
import rootReducer from './reducers/rootReducer';
import pokemonSaga from './sagas';
import { logAction, reportError } from "./middlewares/index";
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(thunk, logAction, reportError)
);

const store = createStore(rootReducer, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
