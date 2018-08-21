import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class Advanced1 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>{`{
  "submissionId": "0313d351-624d-409b-837f-500d603819aa",
  "measurements": [
    {
      "measureId": "IA_EPA_10",
      "value": true
    }
  ],
  "category": "ia",
  "submissionMethod": "registry",
  "performanceStart": "2018-01-01",
  "performanceEnd": "2018-06-01"
}`}</pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>422 Unprocessable Entity</pre>
          <p>Response body:</p>
          <pre>
            {`{
  "error": {
    "type": "DuplicateEntryError",
    "message": "Duplicate entry for key unique_performance_year_entity_type_npi_and_tin_encrypted"
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Advanced1;
