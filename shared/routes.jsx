'use strict';

import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';

// Components
import App from './components/app.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Contact from './components/contact.jsx';

export default (
  <Router>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
);