import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router'

import Gallery from './components/gallery-app/index.jsx'
import Datafile from './components/datafile-app/index.jsx'
import AddForm from './components/new-app/index.jsx'

import './assets/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Gallery} />
    <Route path="/dev/:id" component={Datafile}/>
    <Route path="/new" component={AddForm}/>
  </Router>,
  document.getElementById('root')
);
