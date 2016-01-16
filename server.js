'use strict';

import express from 'express';
import jade from 'jade';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Components from './app/boot-server';

const app = express();
const AppHtml = React.createFactory(Components);
let serverRender = false;

// seetings
app.engine('jade', jade.__express);
app.set('view engine', 'jade');
app.use('/public', express.static(__dirname + '/public'));

// routes
app.get('*', (req, res)=>{
  // if (serverRender) {
  //   res.render('layout', {
  //     react: ReactDOM.renderToString(AppHtml())
  //   });
  // } else {
    res.render('layout', {});
  // }
});

app.listen(3000, (req, res)=>{
  console.log("server start on port 3000");
});