// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  render() {

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about.html">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services.html">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact.html">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
};

export default Menu;
