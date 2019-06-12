import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';

import Routes from './App';

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector('#root')
);

