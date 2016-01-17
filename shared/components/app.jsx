'use strict';

import React, { Component, PropTypes } from 'react';
import DOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}