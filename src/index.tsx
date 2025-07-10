import './polyfills';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import App from './app/components/app';
import './index.scss';
import envConfig from './envConfig';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

const root = createRoot(rootElement);
root.render(
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
        <Router basename={envConfig.baseUrl}>
            <App />
        </Router>
    </StyleSheetManager>
);
