import React from 'react';
import '../node_modules/uswds/dist/css/uswds.css';
import '../node_modules/uswds/dist/js/uswds.js';
import './App.css';

import Header from './header';
import BasicFlow from './basic-flow';
import AdvancedFlow from './advanced-flow';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <Header />
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="logo">
              <em className="usa-logo-text">
                <a href="#" title="Home" aria-label="Home">QPP Submissions API <br/> Developer Documentation</a>
              </em>
            </div>
          </div>
        </div>
        <BasicFlow />
        <script src="/assets/js/vendor/uswds.min.js"></script>
      </div>
    );
  }
}

export default App;
