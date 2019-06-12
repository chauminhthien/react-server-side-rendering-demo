// @flow

import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './../modules/home';
import About from './../modules/about';
import Services from './../modules/services';
import Contact from './../modules/contact';

class Content extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/about.html" render={ () => <About /> } />
        <Route path="/services.html" render={ () => <Services /> } />
        <Route path="/contact.html" render={ () => <Contact /> } />
      </Switch>

    );
  }
};

export default Content;
