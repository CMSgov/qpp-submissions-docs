import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import fileDownload from 'react-file-download';

import submissionJsonExample from './steps/submission-example.json';
const submissionJsonExampleString = JSON.stringify(submissionJsonExample, null, 4);

import { pd } from 'pretty-data';
import submissionXmlExample from './steps/submission-example-xml.js';
const submissionXmlExampleString = pd.xml(submissionXmlExample);

import ReactDOM from 'react-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

const cssClass = "technical-details-pane";

class ExampleDocs extends React.PureComponent {
  render() {
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
      <Tabs
        className={cssClass}
        onSelect={selectTab} tabIndex={index}>
        <TabList>
          <Tab>Sample JSON</Tab>
          <Tab>Sample XML</Tab>
        </TabList>
        <TabPanel>
          <button onClick={downloadJsonExample}>Download</button>
          <CopyToClipboard text={submissionJsonExampleString}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>          
          <pre>{`${submissionJsonExampleString}`}</pre>
        </TabPanel>
        <TabPanel>
          <button onClick={downloadXmlExample}>Download</button>
          <CopyToClipboard text={submissionXmlExampleString}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>        
          <pre>{`${submissionXmlExampleString}`}</pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default ExampleDocs;
