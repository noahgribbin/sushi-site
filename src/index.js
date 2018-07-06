import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/app';
require('./scss/main.scss');

ReactDom.render(
  <App />,
  document.getElementById('app')
 )
