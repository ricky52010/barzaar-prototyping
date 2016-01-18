'use strict';

import React, { Component, PropTypes } from 'react';
import DOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>This is Index Page!</h1>
      </div>
    );
  }
}