import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { initializeStore } from './store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

const store = initializeStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon" component={Pokemon} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
