import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Rubik Web:300,400,500,700', 'sans-serif']
  }
});

ReactDOM.render(
  <BrowserRouter basename='/qpp-submissions-docs/'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
