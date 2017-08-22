import React from 'react';
import { Tabs } from 'react-tabs';
import PropTypes from 'prop-types';

import '../../../styles/common/technical-details-pane.css';

import Basic1 from './steps/basic-1';
import Basic2 from './steps/basic-2';
import Basic3 from './steps/basic-3';
import Advanced1 from './steps/advanced-1';
import Advanced2 from './steps/advanced-2';
import Advanced3 from './steps/advanced-3';
import Advanced4 from './steps/advanced-4';
import Advanced5 from './steps/advanced-5';

class TechnicalDetailsPane extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    const basicTutorialSteps = {
      '#creating-a-submission': <Basic1 />,
      '#adding-measurements': <Basic2 />,
      '#scoring-a-submission': <Basic3 />
    };
    const advancedTutorialSteps = {
      '#submitting-with-performance-data': <Advanced1 />,
      '#submitting-with-performance-data-pt2': <Advanced2 />,
      '#aci-scoring': <Advanced3 />,
      '#updating-a-measure': <Advanced4 />,
      '#comparing-scoring-changes': <Advanced5 />
    };

    return this.props.tutorial === 'basic' ?
      basicTutorialSteps[this.props.hash] || <Basic1 /> :
      advancedTutorialSteps[this.props.hash] || <Advanced1 />;
  }
}

export default TechnicalDetailsPane;
