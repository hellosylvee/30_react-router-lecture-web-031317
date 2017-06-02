import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './components/Main'

ReactDOM.render((
  <Router>
    < Main />
  </Router>
), document.getElementById('container'))
