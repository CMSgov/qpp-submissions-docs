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
    const basicTutorialSteps = {
      '#creating-a-submission': <Basic1 onSelect={this.props.handleSelect} tabIndex={this.props.tabIndex}/>,
      '#adding-measurements': <Basic2 onSelect={this.props.handleSelect} tabIndex={this.props.tabIndex}/>,
      '#scoring-a-submission': <Basic3 onSelect={this.props.handleSelect} tabIndex={this.props.tabIndex}/>
    };

    const advancedTutorialSteps = {
      '#submitting-with-performance-data': <Advanced1 onSelect={this.props.handleSelect} tabIndex={this.props.tabIndex}/>,
      '#aci-scoring': <Advanced2 onSelect={this.props.handleSelect} tabIndex={this.props.tabIndex}/>,
      '#updating-a-measure': <Advanced3 onSelect={this.props.handleSelect} tabIndex={this.props.tabIndex}/>,
      '#comparing-scoring-changes': <Advanced4 onSelect={this.props.handleSelect} tabIndex={this.props.tabIndex}/>
    };

    Tabs.setUseDefaultStyles(false);
    const component = this.props.tutorial === 'basic' ?
      basicTutorialSteps[this.props.hash] || <Basic1 onSelect={this.props.handleSelect} tabIndex={this.props.tabIndex}/> :
      advancedTutorialSteps[this.props.hash] || <Advanced1 onSelect={this.props.handleSelect} tabIndex={this.props.tabIndex}/>;
    return component;
  }
}

export default TechnicalDetailsPane;
