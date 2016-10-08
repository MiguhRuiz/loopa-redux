import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { Router, Route, Link, browserHistory } from 'react-router'

import Gallery from './components/gallery-app/index.jsx'
import Datafile from './components/datafile-app/index.jsx'
import AddForm from './components/new-app/index.jsx'

import './assets/index.css';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Gallery} />
      <Route path="/dev/:id" component={Datafile}/>
      <Route path="/new" component={AddForm}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
