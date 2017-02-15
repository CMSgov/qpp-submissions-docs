import React from 'react';
import { Tabs } from 'react-tabs';

import './technical-details-pane.css';
// import Basic1 from './steps/basic-1';
// import Basic2 from './steps/basic-2';
import Basic3 from './steps/basic-3';
import Advanced4 from './steps/advanced-4';

class TechnicalDetailsPane extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);
    return (
      <Advanced4 />
    );
  }
}

export default TechnicalDetailsPane;
