import './polyfills';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/components/app';

import './index.scss';
import envConfig from './envConfig';


ReactDOM.render(
  <Router basename={envConfig.baseUrl}>
    <App />,
  </Router>,
  document.getElementById('root')
);
