import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import fileDownload from 'js-file-download';
import CopyToClipboard from 'react-copy-to-clipboard';
import { pd } from 'pretty-data';
import '../../styles/api-reference/example-docs.css';
import '../../styles/common/example-code-tabs.css';
import submissionJsonExample_ia from './common/submission-example-ia.json';
import submissionJsonExample_aci from './common/submission-example-aci.json';
import submissionJsonExample_quality from './common/submission-example-quality.json';
import submissionXmlExample from './common/submission-example-xml.js';

const submissionJsonExampleString_ia = JSON.stringify(submissionJsonExample_ia, null, 4);
const submissionJsonExampleString_aci = JSON.stringify(submissionJsonExample_aci, null, 4);
const submissionJsonExampleString_quality = JSON.stringify(submissionJsonExample_quality, null, 4);
const submissionXmlExampleString = pd.xml(submissionXmlExample);
const cssClasses = 'example-code-tabs example-docs';

function downloadJsonExample(e) {
  e.preventDefault();
  fileDownload(submissionJsonExampleString_ia, 'submission-example-ia.json');
  fileDownload(submissionJsonExampleString_aci, 'submission-example-aci.json');
  fileDownload(submissionJsonExampleString_quality, 'submission-example-quality.json');
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
              onClick={downloadJsonExample}>Download IA</button>
            <CopyToClipboard text={submissionJsonExampleString_ia}>
              <button className='ds-c-button ds-c-button--small'>Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionJsonExampleString_ia}`}</pre>
          </TabPanel>
          <TabPanel className='ds-base--inverse'>
            <button className='ds-c-button ds-c-button--small ds-u-margin-right--1'
              onClick={downloadJsonExample}>Download PI</button>
            <CopyToClipboard text={submissionJsonExampleString_aci}>
              <button className='ds-c-button ds-c-button--small'>Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionJsonExampleString_aci}`}</pre>
          </TabPanel>
          <TabPanel className='ds-base--inverse'>
            <button className='ds-c-button ds-c-button--small ds-u-margin-right--1'
              onClick={downloadJsonExample}>Download Quality</button>
            <CopyToClipboard text={submissionJsonExampleString_quality}>
              <button className='ds-c-button ds-c-button--small'>Copy to clipboard</button>
            </CopyToClipboard>
            <pre>{`${submissionJsonExampleString_quality}`}</pre>
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
