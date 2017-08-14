import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/app';
import './styles/index.css';

ReactDOM.render(
  <BrowserRouter forceRefresh={true} basename="/qpp-submissions-docs/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
