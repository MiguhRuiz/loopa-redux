import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { Router, Route, Link, browserHistory } from 'react-router'

import Gallery from './connections/gallery'
import Datafile from './connections/datafile'
import AddForm from './connections/new'

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
