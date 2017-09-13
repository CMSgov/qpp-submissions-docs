import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import fileDownload from 'react-file-download';
import CopyToClipboard from 'react-copy-to-clipboard';
import { pd } from 'pretty-data';
import '../../styles/api-reference/example-docs.css';
import '../../styles/common/example-code-tabs.css';
import submissionJsonExample from './common/submission-example.json';
import submissionXmlExample from './common/submission-example-xml.js';

const submissionJsonExampleString = JSON.stringify(submissionJsonExample, null, 4);
const submissionXmlExampleString = pd.xml(submissionXmlExample);
const cssClasses = 'example-code-tabs example-docs';

function downloadJsonExample(e) {
  e.preventDefault();
  fileDownload(submissionJsonExampleString, 'submission-example.json');
}

function downloadXmlExample(e) {
  e.preventDefault();
  fileDownload(submissionXmlExampleString, 'submission-example.xml');
}

class ExampleDocs extends React.PureComponent {
  render() {
    Tabs.setUseDefaultStyles(false);

    return (
      <div>
        <Tabs className={cssClasses}>
          <TabList>
            <Tab>Sample JSON</Tab>
            <Tab>Sample XML</Tab>
          </TabList>
          <TabPanel className='ds-base--inverse'>
            <button className='ds-c-button ds-c-button--small ds-u-margin-right--1'
              onClick={downloadJsonExample}>Download</button>
            <CopyToClipboard text={submissionJsonExampleString}>
              <button className='ds-c-button ds-c-button--small'>Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionJsonExampleString}`}</pre>
          </TabPanel>
          <TabPanel>
            <button className='ds-c-button ds-c-button--small ds-u-margin-right--1'
              onClick={downloadXmlExample}>Download</button>
            <CopyToClipboard text={submissionXmlExampleString}>
              <button className='ds-c-button ds-c-button--small'>Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionXmlExampleString}`}</pre>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default ExampleDocs;
