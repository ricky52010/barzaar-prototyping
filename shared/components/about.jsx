'use strict';

import React, { Component, PropTypes } from 'react';
import DOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>About Page!</h1>
      </div>
    );
  }  
}