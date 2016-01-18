'use strict';

import React, { Component, PropTypes } from 'react';
import DOM, { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
// import routes from '../shared/routes.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Components
import App from '../shared/components/app.jsx';
import Home from '../shared/components/home.jsx';
import About from '../shared/components/about.jsx';
import Services from '../shared/components/services.jsx';
import Contact from '../shared/components/contact.jsx';

render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'));


