import { ExternalLink, DataModelTable, CodeTab } from '../../../shared';
import envConfig from '../../../envConfig';
import { measurementSetsFields, measurementSetsTabs, measurementSetPracticeDetails } from './data';
import { DocPageProps } from '../../../shared/types';

const MeasurementSets: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 07/06/2023</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}}>Measurement Sets</h2>
      <p className='ds-text-body--lg'>
        The MeasurementSets resource represents performance data for a specified category. Each Submission can have multiple MeasurementSets. Each MeasurementSet in a given Submission is uniquely identified by category, submission method, and programName. MeasurementSets contain Measurements, which can be accessed both via MeasurementSets methods and Measurements methods.
        </p>
      <p className='ds-text-body--lg'>
        <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/MeasurementSets`} text='Try it out!' />
      </p>

      <CodeTab data={measurementSetsTabs.fields} />
      <DataModelTable data={measurementSetsFields.fields} />
      <h2
        className='ds-text-heading--2xl'
        id={measurementSetPracticeDetails['Practice Details']}
      >
        Practice Details
      </h2>
      <p className='ds-text-body--lg'>
        The MeasurementSet property practiceDetails is an optional property only available when programName is set to "pcf".
      </p>
      <CodeTab data={measurementSetsTabs.practiceDetails} />
      <DataModelTable data={measurementSetsFields.practiceDetails} />
    </div>
  );
};

export default MeasurementSets;
