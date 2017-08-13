import React from 'react';
import url from 'url';
import '../../node_modules/uswds/dist/js/uswds.js';
import '../../node_modules/@cmsgov/design-system-core/dist/index.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import '../styles/app.css';
import '../styles/temp-grid.css';
import '../styles/usa-banner.css';

import Header from './header';
import DeveloperPreview from './developer-preview';
import Introduction from './introduction';
import BasicTutorial from './tutorials/basic-tutorial';
import AdvancedTutorial from './tutorials/advanced-tutorial';
import Schemas from './api-reference/api-reference';

const pathsMap = {
  'tutorial': BasicTutorial,
  'advanced-tutorial': AdvancedTutorial,
  'schemas': Schemas,
  'developer-preview': DeveloperPreview,
  'privatebeta': DeveloperPreview
}

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    const path = url
      .parse(this.props.url).pathname.toLowerCase()
      // we're not always mounted at /
      // so just get the last bit
      .split('/').pop();

    this.state = {
      path: path,
      component: pathsMap[path]
    };
  }

  render() {
    return (
      <Router>
        <div>
          <a className="usa-skipnav" href="#main-content">Skip to main content</a>
          <Header />
          <div className="container temp-nav ds-h3 ds-u-margin-y--3">
            <a href="/qpp-submissions-docs" title="Home" aria-label="Home">QPP Submissions API <br/> Developer Documentation</a>
          </div>
          <div className="container">
            <Route path={"/qpp-submissions-docs/" + this.state.path} component={this.state.component} />
            <Route path="/qpp-submissions-docs" component={Introduction} />
          </div>
          <script src="/assets/js/vendor/uswds.min.js"></script>
        </div>
      </Router>
    );
  }
}

export default App;
