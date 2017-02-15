import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const cssClass = "technical-details-pane";

class Advanced3 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass} onSelect={this.handleSelect} selectedIndex={0}>
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
          <p>Response code: <code>200 OK</code></p>
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

export default Advanced3;