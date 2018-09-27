import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import fileDownload from 'js-file-download';
import CopyToClipboard from 'react-copy-to-clipboard';
import { pd } from 'pretty-data';
import '../../styles/api-reference/example-docs.css';
import '../../styles/common/example-code-tabs.css';
import submissionJsonExampleIa from './common/submission-example-ia.json';
import submissionJsonExampleAci from './common/submission-example-aci.json';
import submissionJsonExampleQuality from './common/submission-example-quality.json';
import submissionXmlExample from './common/submission-example-xml.js';

const submissionJsonExampleStringIa = JSON.stringify(submissionJsonExampleIa, null, 4);
const submissionJsonExampleStringAci = JSON.stringify(submissionJsonExampleAci, null, 4);
const submissionJsonExampleStringQuality = JSON.stringify(submissionJsonExampleQuality, null, 4);
const submissionXmlExampleString = pd.xml(submissionXmlExample);
const cssClasses = 'example-code-tabs example-docs';

function downloadJsonExample(e) {
  e.preventDefault();
  fileDownload(submissionJsonExampleStringIa, 'submission-example-ia.json');
  fileDownload(submissionJsonExampleStringAci, 'submission-example-aci.json');
  fileDownload(submissionJsonExampleStringQuality, 'submission-example-quality.json');
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
            <Tab>Sample JSON IA</Tab>
            <Tab>Sample JSON PI</Tab>
            <Tab>Sample JSON Quality</Tab>
            <Tab>Sample XML</Tab>
          </TabList>
          <TabPanel className='ds-base--inverse'>
            <button className='ds-c-button ds-c-button--small ds-u-margin-right--1'
              onClick={downloadJsonExample}>Download IA</button>
            <CopyToClipboard text={submissionJsonExampleStringIa}>
              <button className='ds-c-button ds-c-button--small'>Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionJsonExampleStringIa}`}</pre>
          </TabPanel>
          <TabPanel className='ds-base--inverse'>
            <button className='ds-c-button ds-c-button--small ds-u-margin-right--1'
              onClick={downloadJsonExample}>Download PI</button>
            <CopyToClipboard text={submissionJsonExampleStringAci}>
              <button className='ds-c-button ds-c-button--small'>Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionJsonExampleStringAci}`}</pre>
          </TabPanel>
          <TabPanel className='ds-base--inverse'>
            <button className='ds-c-button ds-c-button--small ds-u-margin-right--1'
              onClick={downloadJsonExample}>Download Quality</button>
            <CopyToClipboard text={submissionJsonExampleStringQuality}>
              <button className='ds-c-button ds-c-button--small'>Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionJsonExampleStringQuality}`}</pre>
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
