import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const cssClass = "technical-details-pane";

class Basic1 extends React.PureComponent {
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
  "programName": "mips",
  "entityType": "individual",
  "taxpayerIdentificationNumber": "000456789",
  "nationalProviderIdentifier": "9876543210",
  "performanceYear": 2016
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code: <code>201</code></p>
          <p>Response body:</p>
          <pre>
{`{
"data": {
  "submission": {
    "id": "0bb00f33-8378-46c1-b769-5662d39b8949",
    "createdAt": "2017-02-13T18:45:58Z",
    "updatedAt": "2017-02-13T18:45:58Z",
    "programName": "mips",
    "entityType": "individual",
    "taxpayerIdentificationNumber": "000456789",
    "nationalProviderIdentifier": "9876543210",
    "performanceYear": 2017,
    "measurementSets": []
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Basic1;