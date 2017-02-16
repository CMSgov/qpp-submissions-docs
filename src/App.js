import React from 'react';
import url from 'url';
import '../node_modules/uswds/dist/js/uswds.js';

import '../node_modules/uswds/dist/css/uswds.css';
import './App.css';

import Header from './header';
import BasicFlow from './basic-flow';
import AdvancedFlow from './advanced-flow';


class App extends React.PureComponent {
  render() {
    const path = url.parse(this.props.url).pathname.toLowerCase();

    let component;

    if (path === '/basic-workflow') {
      component = <BasicFlow />;
    } else if (path === '/advanced-workflow') {
      component = <AdvancedFlow />
    } else {
      component = <div className='usa-grid'>
        <h1>Submissions API</h1>
        <ul>
          <li>
            <p>Not sure how or why you'd use the Submissions API? Walk through an example of how we can <a href="/basic-workflow">easily submit performance data to QPP.</a>
            </p>
          </li>
          <li>
            <p>Dig into ACI scoring and updating existing data in our <a href="/advanced-workflow">advanced workflow</a>.</p>
          </li>
          <li>Return to <a href="https://qpp.cms.gov/resources/developers">QPP developer portal</a></li>
        </ul>
      </div>;
    }

    return (
      <div>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <Header />
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="logo">
              <em className="usa-logo-text">
                <a href="/" title="Home" aria-label="Home">QPP Submissions API <br/> Developer Documentation</a>
              </em>
            </div>
          </div>
        </div>
        {component}
        <script src="/assets/js/vendor/uswds.min.js"></script>
      </div>
    );
  }
}

export default App;
