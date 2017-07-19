import React from 'react';
import url from 'url';
import '../../node_modules/uswds/dist/js/uswds.js';
import '../../node_modules/@cmsgov/design-system-core/dist/index.css';

import '../styles/app.css';
import '../styles/temp-grid.css';
import '../styles/usa-banner.css';

import Header from './header';
import Beta from './privatebeta';
import BasicTutorial from './tutorials/basic-tutorial';
import AdvancedTutorial from './tutorials/advanced-tutorial';
import Schemas from './api-reference/api-reference';

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
    } else if (path === 'privatebeta') {
      component = <Beta hash={hash}/>
    } else {
      component = <section>
        <div className="ds-u-measure--wide">
          <h1 className="ds-h1">Submissions API</h1>

          <h2 className="ds-h2">Easily submit and score performance data.</h2>
          <p className="ds-text--lead">The Submissions API is a conversational interface to easily submit and score performance data with CMS. Learn more about what that looks like and how to use the API by walking through a friendly example.</p>
          <a className="ds-c-button ds-c-button--primary" href="/qpp-submissions-docs/tutorial">Start the tutorial</a>

          <h2 className="ds-h2">Dig into scoring and quickly react to errors.</h2>
          <p className="ds-text--lead">Demystify how the aggregate score for a complex performance category like ACI by seeing an example of how it might be calculated. Updating and correcting performance data is also easy - avoid losing time by solving issues as they arise, rather than reacting months later.</p>
          <a className="ds-c-button ds-c-button--primary" href="/qpp-submissions-docs/advanced-tutorial">Start the advanced tutorial</a>

          <h2 className="ds-h2">Explore the API using the public sandbox.</h2>
          <p className="ds-text--lead">The public sandbox API allows you to test integrating with the API before the reporting period begins - without making a real submission to QPP. You can access the public sandbox API endpoints via the command line using the URL 'https://qpp-submissions-sandbox.navapbc.com/v1/'. Check out the <a href="https://qpp-submissions-sandbox.navapbc.com/">interactive API reference</a> for an exhaustive list of endpoints with example request and response payloads.</p>

          <h2 className="ds-h2">Participate in the Submissions API Private Beta</h2>
          <p className="ds-text--lead">The QPP Submissions API will be in private beta from July 2017 through December 2017. During this period, we will collect participants' feedback and make refinements before we open the API for public use.</p>
          <p className="ds-text--lead">At this time, the private beta is open only to 2017 CMS-approved Qualified Registries ("registries") and Qualified Clinical Data Registries ("QCDRs").  To participate, you will need to request an API key by contacting the Quality Payment Program Service Center at <a href="mailto:qpp@cms.hhs.gov?subject=Request%20API%20Key%20for%20Submissions%20API%20Beta">QPP@cms.hhs.gov</a>.</p>
          <a className="ds-c-button ds-c-button--primary" href="/qpp-submissions-docs/privatebeta">Learn more about the private beta</a>

          <h2 className="ds-h2">Understand and integrate with measures data.</h2>
          <p className="ds-text--lead">A complete list of ACI (Advancing Care Information) and IA (Improvement Activity) measures is available in the <a href="https://github.com/CMSgov/qpp-measures-data">qpp-measures-data repository</a>. Each measure contains a description and additional information around attestation and scoring requirements. Additionally, you can integrate with the qpp-measures-data NPM module to import measures data into your own code base and work with it programatically.</p>

          <h2 className="ds-h2">View the API Reference</h2>
          <p className="ds-text--lead">The technical reference information for the Submissions API and sample submission data are available <a href="/qpp-submissions-docs/schemas">here</a>. This will let you validate your own submission formatting in XML or JSON. JSON and XML schema files are available in the <a href="https://github.com/CMSgov/qpp-submissions-schema">qpp-submissions-schema</a> repository.</p>

          <h2 className="ds-h2">Need help or have feedback?</h2>
          <p className="ds-text--lead">Join our <a href="https://groups.google.com/forum/#!forum/qpp-apis">Google Group</a>, where you can interact with other developers and ask questions, find answers and share experiences using the API. If you need further help, you can <a href="mailto:QPP@cms.hhs.gov">contact</a> the QPP Service Center.</p>

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
