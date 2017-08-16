import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import './styles/index.css';

ReactDOM.render(
  // According to the docs, forceRefresh is required for browsers which don't
  // support pushState. However, even when this is set to false and 'pushState'
  // in window.history is 'true', clicked links did not impact the content.
  <BrowserRouter basename="/qpp-submissions-docs/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
