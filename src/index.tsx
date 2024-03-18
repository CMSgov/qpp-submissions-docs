import './polyfills';

import { StrictMode } from "react";
import ReactDOM from 'react-dom';

import App from './app/components/app';

import './index.scss';


ReactDOM.render(
  <StrictMode>
    <App />,
  </StrictMode>,
  document.getElementById('root')
);
