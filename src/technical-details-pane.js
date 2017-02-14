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
          <Tab>Submission Request</Tab>
          <Tab>Submission Response</Tab>
          <Tab>Measurement Set Request</Tab>
          <Tab>Measurement Set Response</Tab>
          <Tab>Score Request</Tab>
          <Tab>Score Response</Tab>
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
        <TabPanel>
          <pre>{`{
  "submissionId": "6809a184-1588-4356-a28c-3eef95d5659f",
  "category": "aci",
  "source": "provider",
  "performanceStart": "2016-01-01",
  "performanceEnd": "2016-06-01",
  "measurements": [
    {
      "measureId": "ACI_HIE_3",
      "value": {
        "numerator": 1,
        "denominator": 2
      }
    },
    {
      "measureId": "ACI_PHCDRR_5",
      "value": true
    }
  ]
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code: <code>201</code></p>
          <p>Response body:</p>
          <pre>
{`{
  "data": {
    "measurementSet": {
      "id": "5444423d-26b9-47b4-80e5-499d3fbb827a",
      "submissionId": "6809a184-1588-4356-a28c-3eef95d5659f",
      "category": "aci",
      "source": "provider",
      "measureSet": null,
      "performanceStart": "2016-01-01",
      "performanceEnd": "2016-06-01",
      "measurements": [
        {
          "id": "19ed9c66-27f3-414a-85bc-a19d994b3adc",
          "measurementSetId": "5444423d-26b9-47b4-80e5-499d3fbb827a",
          "measureId": "ACI_HIE_3",
          "value": {
            "numerator": 1,
            "denominator": 2
          }
        },
        {
          "id": "7f396ed5-1b19-41eb-82e8-d9305773197b",
          "measurementSetId": "5444423d-26b9-47b4-80e5-499d3fbb827a",
          "measureId": "ACI_PHCDRR_5",
          "value": true
        }
      ]
    }
  }
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code: <code>200</code></p>
          <p>Response body:</p>
          <pre></pre>
        </TabPanel>
        <TabPanel>
          <pre>{`{
  "data": {
    "score": {
      "name": "final",
      "title": "Final Score",
      "detail": "",
      "value": 0,
      "parts": [
        {
          "name": "ia",
          "title": "IA component of final score",
          "detail": "No measurement set to score.",
          "value": 0
        },
        {
          "name": "aci",
          "title": "ACI component of final score",
          "detail": "Scoring based on measurement set \"5444423d-26b9-47b4-80e5-499d3fbb827a\" from source \"provider\" with weight of 25%.",
          "value": 0,
          "original": {
            "name": "aci",
            "title": "Advancing Care Information Score",
            "value": 0,
            "parts": [
              {
                "name": "aci_base",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              },
              {
                "name": "aci_performance",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              },
              {
                "name": "aci_bonus",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              },
              {
                "name": "cehrt_bonus",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              }
            ],
            "warnings": []
          }
        }
      ]
    }
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default TechnicalDetailsPane;
