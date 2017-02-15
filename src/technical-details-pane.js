import React from 'react';
import { Tabs } from 'react-tabs';

import './technical-details-pane.css';
// import Basic1 from './steps/basic-1';
// import Basic2 from './steps/basic-2';
import Basic3 from './steps/basic-3';

class TechnicalDetailsPane extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);
    return (
      <Basic3 />
    );
  }
}

export default TechnicalDetailsPane;
