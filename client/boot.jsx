'use strict';

import React, { Component, PropTypes } from 'react';
import DOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import routes from '../shared/routes.jsx';


render( routes, document.getElementById('app'));


