import React from 'react';

import { ExternalLink, DataModelTable, CodeTab } from '../../../shared';
import envConfig from '../../../envConfig';
import { measurementSetsFields, measurementSetsTabs } from './data';

const MeasurementSets = () => {
  return (
    <>
      <h2 className='ds-h2'>Measurement Sets</h2>
      <p className='ds-text--lead'>
        The MeasurementSets resource represents performance data for a specified category. Each Submission can have multiple MeasurementSets. Each MeasurementSet in a given Submission must be uniquely identified by category and submission method and measureSet (specialties). MeasurementSets contain Measurements, which can be accessed both via MeasurementSets methods and Measurements methods.
        </p>
      <p className='ds-text--lead'>
        <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/MeasurementSets`} text='Try it out!' />
      </p>

      <h3 className='ds-h3'>Resource Representation</h3>
      <CodeTab data={measurementSetsTabs.fields} />
      <DataModelTable data={measurementSetsFields.fields} />
    </>
  );
};

export default MeasurementSets;
