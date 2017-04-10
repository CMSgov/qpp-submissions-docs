import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const cssClass = "technical-details-pane";

class Advanced2 extends React.PureComponent {
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
  "programName": "mips",
  "entityType": "individual",
  "taxpayerIdentificationNumber": "000345678",
  "nationalProviderIdentifier": "9876543210",
  "performanceYear": 2016,
  "measurementSets": [
    {
      "category": "aci",
      "submissionMethod": "cmsWebInterface",
      "performanceStart": "2016-01-01",
      "performanceEnd": "2016-06-01",
      "measurements": [
        {
          "measureId": "ACI_INFBLO_1",
          "value": true
        },
        {
          "measureId": "ACI_ONCDIR_1",
          "value": true
        },
        {
          "measureId": "ACI_EP_1",
          "value": {
            "numerator": 100,
            "denominator": 100
          }
        },
        {
          "measureId": "ACI_PPHI_1",
          "value": true
        },
        {
          "measureId": "ACI_PEA_1",
          "value": {
            "numerator": 50,
            "denominator": 100
          }
        },
        {
          "measureId": "ACI_HIE_1",
          "value": {
            "numerator": 10,
            "denominator": 100
          }
        },
        {
          "measureId": "ACI_HIE_2",
          "value": {
            "numerator": 20,
            "denominator": 100
          }
        }
      ]
    }
  ]
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>201 Created</pre>
          <p>Response body:</p>
          <pre>
{`"data": {
  "submission": {
    "id": "60d2fbbb-7453-47fa-b709-c33090e50843",
    "createdAt": "2017-02-15T22:23:08Z",
    "updatedAt": "2017-02-15T22:23:08Z",
    "programName": "mips",
    "entityType": "individual",
    "taxpayerIdentificationNumber": "000345678",
    "nationalProviderIdentifier": "9876543210",
    "performanceYear": 2016,
    "measurementSets": [
      {
        "id": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
        "submissionId": "60d2fbbb-7453-47fa-b709-c33090e50843",
        "category": "aci",
        "submissionMethod": "cmsWebInterface",
        "measureSet": null,
        "performanceStart": "2016-01-01",
        "performanceEnd": "2016-06-01",
        "measurements": [
          {
            "id": "deac9e0f-2a63-4ed2-a79f-6f033ed5e572",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_EP_1",
            "value": {
              "numerator": 100,
              "denominator": 100
            }
          },
          {
            "id": "a3cb7c78-2380-4573-b726-8c8e3b70529a",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_HIE_1",
            "value": {
              "numerator": 10,
              "denominator": 100
            }
          },
          {
            "id": "095ff34a-2fae-4a00-84ce-3da182e24de8",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_HIE_2",
            "value": {
              "numerator": 20,
              "denominator": 100
            }
          },
          {
            "id": "eccb15a0-1ba8-4395-9dca-136365ae8085",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_INFBLO_1",
            "value": true
          },
          {
            "id": "3d6ad03b-120a-49f8-9884-324e63fc6daa",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_ONCDIR_1",
            "value": true
          },
          {
            "id": "8c64cc43-27e4-4763-8fa4-0eb035da4b6c",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_PEA_1",
          },
          {
            "id": "095ff34a-2fae-4a00-84ce-3da182e24de8",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_HIE_2",
            "value": {
              "numerator": 20,
              "denominator": 100
            }
          },
          {
            "id": "eccb15a0-1ba8-4395-9dca-136365ae8085",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_INFBLO_1",
            "value": true
          },
          {
            "id": "3d6ad03b-120a-49f8-9884-324e63fc6daa",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_ONCDIR_1",
            "value": true
          },
          {
            "id": "8c64cc43-27e4-4763-8fa4-0eb035da4b6c",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_PEA_1",
            "value": {
              "numerator": 50,
              "denominator": 100
            }
          },
          {
            "id": "0ba52552-1b30-4312-a9e6-ec52ae5aea66",
            "measurementSetId": "b702d4ee-5a75-4e10-9aaf-3539123956e7",
            "measureId": "ACI_PPHI_1",
            "value": true
          }
        ]
      }
    ]
  }`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Advanced2;