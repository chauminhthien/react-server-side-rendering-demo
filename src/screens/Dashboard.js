// @flow

import * as React from 'react';
import { Helmet } from "react-helmet";

import Menu from './Menu';
import Footer from './Footer';
import Content from './Content';

class DashboardPage extends React.Component {

  render() {

    return (
      <div id="wrapper">
        <Helmet >
          <title>Trang chủ</title>
        </Helmet>

        <Menu />

        <Content />

        <Footer />
      </div>

    );
  }
};

export default DashboardPage;
