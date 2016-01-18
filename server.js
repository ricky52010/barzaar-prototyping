'use strict';

import express from 'express';
import jade from 'jade';
import React from 'react';
import DOM from 'react-dom/server';
import routes from './shared/routes.jsx';
import { match, RoutingContext } from 'react-router';

const app = express();

// seetings
app.engine('jade', jade.__express);
app.set('view engine', 'jade');
app.use('/public', express.static(__dirname + '/public'));


// routes
app.get('*', (req, res)=>{
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.send(500, '500')
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // res.status(200).send(DOM.renderToString(<RoutingContext {...renderProps} />));
      res.render('layout', {
        react: DOM.renderToString(<RoutingContext {...renderProps} />)
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

// app.get('/*', router);

app.listen(3000, (req, res)=>{
  console.log("server start on port 3000");
});