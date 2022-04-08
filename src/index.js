import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import App from './containers/App';
import pokemonReducer from './reducers/pokemonReducer';
import pokemonSaga from './sagas';
import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const composedEnhancers = composeAlt(applyMiddleware(sagaMiddleware));

const store = createStore(
  pokemonReducer,
  composedEnhancers
);

sagaMiddleware.run(pokemonSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
