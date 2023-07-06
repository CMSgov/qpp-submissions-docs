import React from 'react';

import { ExternalLink, DataModelTable, CodeTab } from '../../../shared';
import envConfig from '../../../envConfig';
import { measurementSetsFields, measurementSetsTabs, measurementSetPracticeDetails } from './data';

const MeasurementSets = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 07/06/2023</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Measurement Sets</h2>
      <p className='ds-text--lead'>
        The MeasurementSets resource represents performance data for a specified category. Each Submission can have multiple MeasurementSets. Each MeasurementSet in a given Submission is uniquely identified by category, submission method, and programName. MeasurementSets contain Measurements, which can be accessed both via MeasurementSets methods and Measurements methods.
        </p>
      <p className='ds-text--lead'>
        <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/MeasurementSets`} text='Try it out!' />
      </p>

      <CodeTab data={measurementSetsTabs.fields} />
      <DataModelTable data={measurementSetsFields.fields} />
      <h2
        className='ds-h2'
        id={measurementSetPracticeDetails['Practice Details']}
      >
        Practice Details
      </h2>
      <p className='ds-text--lead'>
        The MeasurementSet property practiceDetails is an optional property only available when programName is set to "pcf".
      </p>
      <CodeTab data={measurementSetsTabs.practiceDetails} />
      <DataModelTable data={measurementSetsFields.practiceDetails} />
    </>
  );
};

export default MeasurementSets;
