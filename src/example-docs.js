import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import fileDownload from 'react-file-download';
import ReactDOM from 'react-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import { pd } from 'pretty-data';
import './technical-details-pane-examples.css'
import submissionJsonExample from './examples/submission-example.json';
import submissionXmlExample from './examples/submission-example-xml.js';

const submissionJsonExampleString = JSON.stringify(submissionJsonExample, null, 4);
const submissionXmlExampleString = pd.xml(submissionXmlExample);
const cssClasses = "technical-details-pane technical-details-pane-examples";

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
      <div className="usa-grid a-bit-wider">
        <Tabs
          className={cssClasses}
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
        <h3>Next steps</h3>
        <p>Ready to try creating a submission?</p>
        <p>Check out our interactive <a href="https://qpp-submissions-sandbox.navapbc.com/api-explorer">API reference</a>.</p>
      </div>
    );
  }
}

export default ExampleDocs;
