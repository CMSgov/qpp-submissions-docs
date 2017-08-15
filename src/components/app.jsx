import React from 'react';
import url from 'url';

import $ from 'jquery';
import 'uswds/dist/js/uswds.js';

import '@cmsgov/design-system-core/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/qpp-style/css/qpp-style.css';
import '../styles/app.css';
import '../styles/temp-grid.css';

import Header from './header';
import Footer from './footer';
import SubscribeModal from './subscribe-modal';
import DeveloperPreview from './developer-preview';
import BasicTutorial from './tutorials/basic-tutorial';
import AdvancedTutorial from './tutorials/advanced-tutorial';
import Schemas from './api-reference/api-reference';

// bootstrap js needs window.jQuery to be defined, but imports are always hoisted
// so we need to require (as import 'bootstrap...' would get hoisted before window.jQuery is set)
window.jQuery = window.$ = $;
require('bootstrap');

class App extends React.PureComponent {
  render() {
    const path = url
      .parse(this.props.url).pathname.toLowerCase()
      // we're not always mounted at /
      // so just get the last bit
      .split('/').pop();
    const hash = url.parse(this.props.url).hash;

    let component;

    if (path === 'tutorial') {
      component = <BasicTutorial hash={hash}/>;
    } else if (path === 'advanced-tutorial') {
      component = <AdvancedTutorial hash={hash}/>
    } else if (path === 'schemas') {
      component = <Schemas hash={hash}/>
    } else if (['developer-preview', 'privatebeta'].includes(path)) {
      component = <DeveloperPreview hash={hash}/>
    } else {
      component = <section>
        <div className="ds-u-measure--wide">
          <h2 className="ds-h2">Easily submit and score QPP data in real-time via API</h2>
          <p className="ds-text--lead">The Submissions API enables submission and real-time performance scoring of Quality Payment Program (QPP) data. CMS is inviting developers to provide feedback on the new Submissions API for the purpose of improved development. </p>
          <p className="ds-text--lead">From July 2017 through November 2017, participants in the Developer Preview can build integrations with their software to test submission and scoring of Quality Payment Program (QPP) performance data via API.</p>
          <a className="ds-c-button ds-c-button--primary" href="/qpp-submissions-docs/developer-preview">Join the QPP Developer Preview</a>

          <h2 className="ds-h2">Explore the API</h2>
          <p className="ds-text">View the <a href="/qpp-submissions-docs/schemas">API documentation</a> or play around with the <a href="https://qpp-submissions-sandbox.navapbc.com/">Interactive Docs</a> using your own data.</p>
          <p className="ds-text">The Submissions API has three types of objects:</p>
          <ul>
            <li><b>Submissions</b> contain any performance data submitted on behalf of a single MIPS-eligible clinician, practice or group.</li>
            <li><b>Measurement sets</b> represent a set of performance data related to one specific category (Quality, Improvement Activities, or Advancing Care Information), and is tied to a submission object.</li>
            <li><b>Measurements</b> represent one single data point related to a specific measure in a given category, and is tied to a measurement set object.</li>
          </ul>

          <p className="ds-text">Walk through how to create a new submission, submit measures and receive real-time scoring in the below tutorial.</p>
          <a className="ds-c-button ds-c-button--primary" href="/qpp-submissions-docs/tutorial">Start the tutorial</a>
        </div>
      </section>;
    }

    return (
      <div>
        <main id="panel">
          <Header />
          <div className="qpp-docs-title-container">
            <div className="content-container">
              <a className="qpp-docs-title-back" href="https://qpp.cms.gov/developers">&lt; back to QPP Developer Tools</a>
              <h3 className="qpp-docs-title-text">QPP Submissions API Documentation</h3>
            </div>
          </div>
          <div className="content-block">
            <div className="content-container">
              {component}
            </div>
          </div>
          <Footer />
          <script src="/assets/js/vendor/uswds.min.js"></script>
        </main>
        <SubscribeModal />
      </div>
    );
  }
}

export default App;
