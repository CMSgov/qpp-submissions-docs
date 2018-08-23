import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class Advanced4 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>
            {`{
  "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
  "measureId": "IA_EPA_4",
  "value": false
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
      "id": "0313d351-10bd-4419-a593-ece163a67520",
      "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
      "measureId": "IA_EPA_4",
      "value": false,
      "performanceStart": null,
      "performanceEnd": null
    }
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Advanced4;
