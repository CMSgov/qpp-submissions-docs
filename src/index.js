import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './styles/index.css';

ReactDOM.render(
  <App url={document.URL}/>,
  document.getElementById('root')
);
