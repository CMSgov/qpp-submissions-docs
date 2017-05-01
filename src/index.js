import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

ReactDOM.render(
  <App url={document.URL}/>,
  document.getElementById('root')
);
