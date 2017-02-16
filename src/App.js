import React from 'react';
import url from 'url';
import '../node_modules/uswds/dist/js/uswds.js';

import '../node_modules/uswds/dist/css/uswds.css';
import './App.css';

import Header from './header';
import BasicTutorial from './basic-tutorial';
import AdvancedTutorial from './advanced-tutorial';

class App extends React.PureComponent {
  render() {
    let path = url.parse(this.props.url).pathname.toLowerCase();
    const hash = url.parse(this.props.url).hash;

    // in prod we're mounted at /qpp-submissions-docs/
    if (path.startsWith('/qpp-submissions-docs')) {
      // grab the last bit then
      path = path.split('/').slice(-1);
    }

    let component;

    if (path === '/tutorial') {
      component = <BasicTutorial hash={hash}/>;
    } else if (path === '/advanced-tutorial') {
      component = <AdvancedTutorial hash={hash}/>
    } else {
      component = <div className='usa-grid'>
        <h1>Submissions API</h1>
        <ul>
          <li>
            <p>Learn about how and why you'd use the Submissions API! Walk through <a href="/tutorial">an example of how we can easily submit performance data to CMS.</a>
            </p>
          </li>
          <li>
            <p>Dig further into how scoring works and updating existing data in our <a href="/advanced-tutorial">advanced tutorial</a>.
            </p>
          </li>
          <li>
            <p>Want more detail? Check out our <a href="https://qpp-submissions-sandbox.navapbc.com/api-explorer">interactive API reference</a> for an exhaustive list of endpoints.
            </p>
          </li>
          <li>
            <p>Return to the <a href="https://qpp.cms.gov/resources/developers">QPP developer portal</a>.</p>
          </li>
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
