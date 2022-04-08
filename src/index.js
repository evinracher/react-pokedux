import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import App from './containers/App';
import pokemonReducer from './reducers/pokemonReducer';
import { logAction, reportError } from './middlewares';
import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logAction, reportError)
);

const store = createStore(
  pokemonReducer,
  composedEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
