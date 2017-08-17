import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const cssClass = 'technical-details-pane';

class Advanced4 extends React.PureComponent {
  render() {
    return (
      <Tabs
        className={cssClass}
        onSelect={this.props.onSelect}
        selectedIndex={this.props.tabIndex}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>
            {`{
  "id": "a3cb7c78-2380-4573-b726-8c8e3b70529a",
  "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
  "measureId": "ACI_HIE_1",
  "value": {
    "numerator": 50,
    "denominator": 100
  }
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>200 OK</pre>
          <p>Response body:</p>
          <pre>
            {`{
  "data": {
    "measurement": {
      "id": "a3cb7c78-2380-4573-b726-8c8e3b70529a",
      "submissionId": "60d2fbbb-7453-47fa-b709-c33090e50843",
      "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
      "measureId": "ACI_HIE_1",
      "value": {
        "numerator": 50,
        "denominator": 100
      }
    }
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

Advanced4.propTypes = {
  onSelect: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired
};

export default Advanced4;
