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
        <h1>Landing page goes here</h1>
        <ul>
          <li><a href="/basic-workflow">Basic workflow</a></li>
          <li><a href="/advanced-workflow">Advanced workflow</a></li>
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
