import React from 'react';
import { Tabs } from 'react-tabs';

import './technical-details-pane.css';

import Basic1 from './steps/basic-1';
import Basic2 from './steps/basic-2';
import Basic3 from './steps/basic-3';
import Advanced1 from './steps/advanced-1';
import Advanced2 from './steps/advanced-2';
import Advanced3 from './steps/advanced-3';
import Advanced4 from './steps/advanced-4';

const basicTutorialSteps = {
  'creating-a-submission': <Basic1 />,
  'adding-measurements': <Basic2 />,
  'scoring-a-submission': <Basic3 />
};

const advancedTutorialSteps = {
  'submitting-with-performance-data': <Advanced1 />,
  'aci-scoring': <Advanced2 />,
  'updating-a-measure': <Advanced3 />,
  'scoring-changes': <Advanced4 />
};

class TechnicalDetailsPane extends React.Component {
  render() {
    const component = this.props.tutorial === 'basic' ?
      basicTutorialSteps[this.props.hash] || <Basic1 /> :
      advancedTutorialSteps[this.props.hash] || <Advanced1 />;
    Tabs.setUseDefaultStyles(false);
    return component;
  }
}

export default TechnicalDetailsPane;
