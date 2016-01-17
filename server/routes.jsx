'use strict';

import React from 'react';
import DOM from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import createLocation from 'history'
import routes from '../shared/routes.jsx';

export default (req, res)=>{
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.send(500, '500')
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.render('layout', {
        react: DOM.renderToString(<RoutingContext {...renderProps} />)
      });
    } else {
      res.status(404).send('Not found');
    }
  })
};