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

class TechnicalDetailsPane extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);

    const selectTab = this.props.selectTab;
    const index = this.props.tabIndex;
    const basicTutorialSteps = {
      '#creating-a-submission': <Basic1 onSelect={selectTab} tabIndex={index}/>,
      '#adding-measurements': <Basic2 onSelect={selectTab} tabIndex={index}/>,
      '#scoring-a-submission': <Basic3 onSelect={selectTab} tabIndex={index}/>
    };
    const advancedTutorialSteps = {
      '#submitting-with-performance-data': <Advanced1 onSelect={selectTab} tabIndex={index}/>,
      '#aci-scoring': <Advanced2 onSelect={selectTab} tabIndex={index}/>,
      '#updating-a-measure': <Advanced3 onSelect={selectTab} tabIndex={index}/>,
      '#comparing-scoring-changes': <Advanced4 onSelect={selectTab} tabIndex={index}/>
    };

    return this.props.tutorial === 'basic' ?
      basicTutorialSteps[this.props.hash] || <Basic1 onSelect={selectTab} tabIndex={index}/> :
      advancedTutorialSteps[this.props.hash] || <Advanced1 onSelect={selectTab} tabIndex={index}/>;
  }
}

export default TechnicalDetailsPane;
