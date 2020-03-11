import './style.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { combineReducers, createStore } from 'redux';
import ArticleReducer from './reducers/article.reducer';
import ArticleContainer from './containers/article.container';

let reducers = combineReducers({
  articleReducer: ArticleReducer
});

let store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <ArticleContainer />
  </Provider>,
  document.getElementById('root')
);
