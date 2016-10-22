import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { Router, Route, Link, browserHistory } from 'react-router'

import ReactGA from 'react-ga'

function pageView() {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

import Gallery from './connections/gallery'
import Datafile from './connections/datafile'
import AddForm from './connections/new'

import './assets/index.css';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={pageView}>
      <Route path="/" component={Gallery} />
      <Route path="/dev/:id" component={Datafile}/>
      <Route path="/new" component={AddForm}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
