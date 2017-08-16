import React from 'react';
import '../../node_modules/uswds/dist/js/uswds.js';
import '../../node_modules/@cmsgov/design-system-core/dist/index.css';
import { Route } from 'react-router-dom';

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

// bootstrap js needs window.jQuery to be defined, but imports are always hoisted
// so we need to require (as import 'bootstrap...' would get hoisted before window.jQuery is set)
window.jQuery = window.$ = $;
require('bootstrap');

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

function getComponent({match}) {
  var activeComponent = allPaths[match.params.componentKey].component;
  return <div>{activeComponent}</div>
}

class App extends React.Component {
  render() {
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
              <Route exact path="/" component={Introduction} />
              <Route path="/:componentKey" render={getComponent} />
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
