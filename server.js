'use strict';

import express from 'express';
import jade from 'jade';
import React from 'react';
import DOM from 'react-dom/server';
import routes from './server/routes.jsx';
import { match, RoutingContext } from 'react-router';

const app = express();

// seetings
app.engine('jade', jade.__express);
app.set('view engine', 'jade');
app.use('/public', express.static(__dirname + '/public'));


// routes
app.get('*',  routes);

// app.get('/*', router);

app.listen(3000, (req, res)=>{
  console.log("server start on port 3000");
});