import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './technical-details-pane.css';

const cssClass = "technical-details-pane";

class TechnicalDetailsPane extends React.Component {
  render() {
    Tabs.setUseDefaultStyles(false);
    return (
      <Tabs className={cssClass} onSelect={this.handleSelect} selectedIndex={0}>
        <TabList>
          <Tab className="request-pane__tab">Request</Tab>
          <Tab className="response-pane__tab">Response</Tab>
        </TabList>
        <TabPanel className="request-pane__panel">
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
        <TabPanel className="response-pane__panel">
          <p>Response code: <code>200</code></p>
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
    "performanceYear": 2016,
    "measurementSets": [
      {
        "id": "d007bde1-0054-4d5f-9fdf-c07c82efbd7f",
        "submissionId": "0bb00f33-8378-46c1-b769-5662d39b8949",
        "category": "ia",
        "source": "provider",
        "measureSet": null,
        "performanceStart": "2016-01-01",
        "performanceEnd": "2016-06-01",
        "measurements": [
          {
            "id": "30723f4f-1efb-4a97-942e-6e9fbc54955b",
            "measurementSetId": "d007bde1-0054-4d5f-9fdf-c07c82efbd7f",
            "measureId": "IA_EPA_4",
            "value": true
          }
        ]
      },
      {
        "id": "3b797dbd-675e-44cd-a2ac-ff93952c6f40",
        "submissionId": "0bb00f33-8378-46c1-b769-5662d39b8949",
        "category": "aci",
        "source": "provider",
        "measureSet": null,
        "performanceStart": "2016-01-01",
        "performanceEnd": "2016-06-01",
        "measurements": [
          {
            "id": "65134aac-2cfa-47ac-9756-87fb51137d75",
            "measurementSetId": "3b797dbd-675e-44cd-a2ac-ff93952c6f40",
            "measureId": "ACI_HIE_3",
            "value": {
              "numerator": 1,
              "denominator": 2
            }
          },
          {
            "id": "105fff05-1acf-44fd-99ca-8fda55cefd18",
            "measurementSetId": "3b797dbd-675e-44cd-a2ac-ff93952c6f40",
            "measureId": "ACI_PHCDRR_5",
            "value": true
          }
        ]
      }
    ]
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default TechnicalDetailsPane;
