import React from 'react';
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

// linkText only becomes relevant when building links, which we're not doing
// (yet).
const topicsPathsMap = {
  'introduction': {
    linkText: 'Introduction',
    component: <Introduction />
  },
  'developer-preview': {
    linkText: 'Getting a Key',
    component: <DeveloperPreview />
  },
  'schemas': {
    linkText: 'Schemas',
    component: <Schemas />
  }
}

const guidesPathsMap = {
  'tutorial': {
    linkText: 'Quickstart',
    component: <BasicTutorial />
  },
  'advanced-tutorial':{
    linkText: 'Advanced Tutorial',
    component: <AdvancedTutorial />
  }
}

const allPaths = Object.assign({}, topicsPathsMap, guidesPathsMap)

const getContent = ({ match }) => {
  var activeComponent = allPaths[match.params.contentKey].component;
  return <div>{activeComponent}</div>
}

class App extends React.PureComponent {
  render() {
    return (
      <Router basename="/qpp-submissions-docs/">
        <div>
          <a className="usa-skipnav" href="#main-content">Skip to main content</a>
          <Header />
          <div className="container temp-nav ds-h3 ds-u-margin-y--3">
            <a href="/qpp-submissions-docs" title="Home" aria-label="Home">QPP Submissions API <br/> Developer Documentation</a>
          </div>
          <div className="container">
            <Route exact path="/" component={Introduction} />
            <Route path="/:contentKey" render={getContent} />
          </div>
          <script src="/assets/js/vendor/uswds.min.js"></script>
        </div>
      </Router>
    );
  }
}

export default App;
