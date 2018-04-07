import React from 'react';
import ReactDom from 'react-dom';
import App from './src/containers/app';
require('./src/scss/main.scss');

ReactDom.render(<App />, document.getElementById('app'))
