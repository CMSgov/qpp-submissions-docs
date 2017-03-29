import React from 'react';
import url from 'url';
import '../node_modules/uswds/dist/js/uswds.js';

// import '../node_modules/uswds/dist/css/uswds.css';
import '../node_modules/@cmsgov/design-system-core/dist/index.css';
import './App.css';
import './temp-grid.css';
import './usa-banner.css';

import Header from './header';
import BasicTutorial from './basic-tutorial';
import AdvancedTutorial from './advanced-tutorial';
import Schemas from './data-schemas/schemas';

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
    } else {
      component = <section>
        <div className="ds-u-measure--wide">
          <h1 className="ds-h1">Submissions API</h1>

          <h2 className="ds-h2">Easily submit and score performance data.</h2>
          <p className="ds-text--lead">The Submissions API is a conversational interface to easily submit and score performance data with CMS. Learn more about what that looks like and how to use the API by walking through a friendly example.</p>
          <a className="ds-c-button ds-c-button--primary" href="/qpp-submissions-docs/tutorial">Start the tutorial</a>

          <h2 className="ds-h2">Dig into scoring and quickly react to errors.</h2>
          <p className="ds-text--lead">Demystify how the aggregate score for a complex performance category like ACI is calculated. Updating and correcting performance data is also easy - avoid losing time by solving issues as they arise, rather than reacting months later.</p>
          <a className="ds-c-button ds-c-button--primary" href="/qpp-submissions-docs/advanced-tutorial">Start the advanced tutorial</a>

          <h2 className="ds-h2">Explore the full API with our interactive reference.</h2>
          <p className="ds-text--lead">Want more detail? Check out our <a href="https://qpp-submissions-sandbox.navapbc.com/api-explorer">interactive API reference</a> for an exhaustive list of endpoints with example request and response payloads. Test out what else you can do!</p>

          <h2 className="ds-h2">Understand and integrate with measures data.</h2>
          <p className="ds-text--lead">A complete list of ACI (Advancing Care Information) and IA (Improvement Activity) measures is available in the <a href="https://github.com/CMSgov/qpp-measures-data">qpp-measures-data repository</a>. Each measure contains a description and additional information around attestation and scoring requirements. Additionally, you can integrate with the qpp-measures-data NPM module to import measures data into your own code base and work with it programatically.</p>

          <h2 className="ds-h2">View the submissions data schema</h2>
          <p className="ds-text--lead">To view the submissions data schema and sample submission data, <a href="/qpp-submissions-docs/schemas">click here</a>. This will let you validate your own submission formatting in XML or JSON.</p>
          <a className="ds-c-button ds-c-button--primary" href="/qpp-submissions-docs/schemas">See examples</a>

          <h3 className="ds-h3">All done?</h3>
          <p>Return to the <a href="https://qpp.cms.gov/resources/developers">QPP Developer Resources</a>.</p>
        </div>
      </section>;
    }

    return (
      <div>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <Header />
        <div className="container temp-nav ds-h3 ds-u-margin-y--3">
          <a href="/qpp-submissions-docs" title="Home" aria-label="Home">QPP Submissions API <br/> Developer Documentation</a>
        </div>
        <div className="container">
          {component}
        </div>
        <script src="/assets/js/vendor/uswds.min.js"></script>
      </div>
    );
  }
}

export default App;
