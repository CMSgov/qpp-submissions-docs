import React, {PureComponent} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import fileDownload from 'react-file-download';
import CopyToClipboard from 'react-copy-to-clipboard';
import { pd } from 'pretty-data';
import '../../../styles/api-reference/examples/technical-details-pane-examples.css'
import submissionJsonExample from './submission-example.json';
import submissionXmlExample from './submission-example-xml.js';

const submissionJsonExampleString = JSON.stringify(submissionJsonExample, null, 4);
const submissionXmlExampleString = pd.xml(submissionXmlExample);
const cssClasses = "technical-details-pane technical-details-pane-examples";

export default class ExampleDocs extends PureComponent {
  render() {
    console.log('rendering');
    Tabs.setUseDefaultStyles(false);

    const selectTab = this.props.selectTab;
    const index = this.props.tabIndex;

    function downloadJsonExample(e) {
      e.preventDefault();
      fileDownload(submissionJsonExampleString, 'submission-example.json');
    }
    function downloadXmlExample(e) {
      e.preventDefault();
      fileDownload(submissionXmlExampleString, 'submission-example.xml');
    }
    return (
      <div>
        <Tabs
          className={cssClasses}
          onSelect={selectTab} tabIndex={index}>
          <TabList>
            <Tab>Sample JSON</Tab>
            <Tab>Sample XML</Tab>
          </TabList>
          <TabPanel className="ds-base--inverse">
            <button className="ds-c-button ds-c-button--small ds-u-margin-right--1"
              onClick={downloadJsonExample}>Download</button>
            <CopyToClipboard text={submissionJsonExampleString}>
              <button className="ds-c-button ds-c-button--small">Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionJsonExampleString}`}</pre>
          </TabPanel>
          <TabPanel>
            <button className="ds-c-button ds-c-button--small ds-u-margin-right--1"
              onClick={downloadXmlExample}>Download</button>
            <CopyToClipboard text={submissionXmlExampleString}>
              <button className="ds-c-button ds-c-button--small">Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionXmlExampleString}`}</pre>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
