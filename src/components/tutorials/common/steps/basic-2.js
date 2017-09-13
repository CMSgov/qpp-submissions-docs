import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class Basic2 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>{`{
  "submissionId": "b6423273-d3a3-42ef-9728-1871b246477e",
  "category": "ia",
  "submissionMethod": "cmsWebInterface",
  "performanceStart": "2016-01-01",
  "performanceEnd": "2016-06-01",
  "measurements": [
    {
      "measureId": "IA_EPA_4",
      "value": true
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
            {`{
  "data": {
    "measurementSet": {
      "id": "88345eab-0082-4a58-a4e8-e3140c7f48ee",
      "createdAt": "2017-02-15T22:23:08Z",
      "updatedAt": "2017-02-15T22:23:08Z",
      "submissionId": "b6423273-d3a3-42ef-9728-1871b246477e",
      "category": "ia",
      "submissionMethod": "cmsWebInterface",
      "measureSet": null,
      "performanceStart": "2016-01-01",
      "performanceEnd": "2016-06-01",
      "measurements": [
        {
          "id": "1e039419-171d-4efa-9158-4d62f63823ff",
          "measurementSetId": "88345eab-0082-4a58-a4e8-e3140c7f48ee",
          "measureId": "IA_EPA_4",
          "value": true
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

export default Basic2;
