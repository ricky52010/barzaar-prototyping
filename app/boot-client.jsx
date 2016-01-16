'use strict';

import React, { Component, PropTypes } from 'react';
import DOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

import App from './components/app.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Contact from './components/contact.jsx';


render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'))


