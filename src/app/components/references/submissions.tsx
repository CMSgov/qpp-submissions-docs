import React from 'react';
import { ExternalLink, CodeTab, DataModelTable } from '../../../shared';
import envConfig from '../../../envConfig';
import { submissionsTabs, submissionsFields } from './data';

const Submissions = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/26/2020</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Submissions</h2>
      <p className='ds-text--lead'>
        The Submissions resource represents one year of performance data for a given individual or group. Submissions contain MeasurementSets which can be accessed both via Submissions methods and MeasurementSets methods.
      </p>
      <p className='ds-text--lead'>
        Submissions resources are 'shared' in the sense that they contain Measurement Sets that may be created by multiple users.
      </p>
      <p className='ds-text--lead'>
        <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/Submissions`} text='Try it out!' />
      </p>
      <h3 className='ds-h3'>Resource Representation</h3>
      <CodeTab data={submissionsTabs.fields} />
      <DataModelTable data={submissionsFields.fields} />
    </>
  );
};

export default Submissions;
