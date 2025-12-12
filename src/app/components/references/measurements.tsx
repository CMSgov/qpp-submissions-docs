import { DataModelTable, LinkToId, ExternalLink, CodeTab } from '../../../shared';
import { measurementsTitleAndId, measurementsTabs, measurementsFields } from './data';
import envConfig from '../../../envConfig';
import { DocPageProps } from '../../../shared/types';

const Measurements: React.FC<DocPageProps> = ({dataTestId}: DocPageProps) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 02/11/2025</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-text-heading--2xl' style={{marginTop: 0}}>Measurements</h2>
      <ul>
        {Object.entries(measurementsTitleAndId).map(([title, id], i) =>
          <li key={i}>
            <LinkToId to={`#${id}`} text={title} offset='120' />
          </li>,
        )}
      </ul>
      <p className='ds-text-body--lg'>
        The Measurements resource represents performance data for a specific measure within a MeasurementSet. There are five types of Measurements: Boolean, Proportion, Non-Proportion, Single-Performance Rate, and Multi-Performance Rate. Each MeasurementSet can have multiple Measurements. No two Measurements in a given MeasurementSet can have the same measureId.
      </p>
      <p className='ds-text-body--lg'>
        <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs/#/Measurements`} text='Try it out!' />
      </p>

      <CodeTab data={measurementsTabs.fields} />
      <DataModelTable data={measurementsFields.fields} />

      <h2 className='ds-text-heading--2xl' id={measurementsTitleAndId.Boolean}>Boolean Measurements</h2>
      <p className='ds-text-body--lg'>
        Boolean Measurements are applicable to Improvement Activity (IA) and Promoting Interoperability (PI) measures. For PI Measures, if a measure has an Exclusion measure ID listed, this means that the Exclusion measure ID cannot be submitted in the same Measurement Set as the original measure because they have opposite meanings and cannot both be true.
      </p>
      <CodeTab data={measurementsTabs.boolean} />
      <DataModelTable data={measurementsFields.boolean} />

      <h2 className='ds-text-heading--2xl' id={measurementsTitleAndId.Proportion}>Proportion Measurements</h2>
      <p className='ds-text-body--lg'>
        Proportion Measurements are applicable to Promoting Interoperability (PI) measures. For PI Measures, if a measure has an Exclusion measure ID listed, this means that the Exclusion measure ID cannot be submitted in the same Measurement Set as the original measure because they have opposite meanings and cannot both be true.
      </p>
      <CodeTab data={measurementsTabs.proportion} />
      <DataModelTable data={measurementsFields.proportion} />

      <h2 className='ds-text-heading--2xl' id={measurementsTitleAndId['Non-Proportion']}>Non-Proportion Measurements</h2>
      <p className='ds-text-body--lg'>
        Non-Proportion Measurements are applicable to quality measures and are denoted as <code>"metricType": "nonProportion"</code>.  Most are authored by QCDRs and are used to attest to measures that are otherwise categorized as 'ratio' 'continuous variable', or a combination of 'proportion' and the former.  Non-proportion measurements are unconstrained, so while the fields are 'numerator' and 'denominator' there is no validation that the numerator must be less than or equal to the denominator or that the denominator is greater than 0, as is the case for proportion measurements.
      </p>
      <CodeTab data={measurementsTabs.nonProportion} />
      <DataModelTable data={measurementsFields.nonProportion} />

      <h2 className='ds-text-heading--2xl' id={measurementsTitleAndId['CQM Single-Performance Rate']}>MIPS CQM Single-Performance Rate Measurements</h2>
      <p className='ds-text-body--lg'>
        Single-Performance Rate Measurements are applicable to MIPS CQM Quality measures.
      </p>
      <CodeTab data={measurementsTabs.cqmSinglePerformanceRate} />
      <DataModelTable data={measurementsFields.cqmSinglePerformanceRate} />

      <h2 className='ds-text-heading--2xl' id={measurementsTitleAndId['QCDR Single-Performance Rate']}>QCDR Single-Performance Rate Measurements</h2>
      <p className='ds-text-body--lg'>
        Single-Performance Rate Measurements are applicable to QCDR Quality measures. The performanceRate field is both writable and required for these measures.
      </p>
      <CodeTab data={measurementsTabs.qcdrSinglePerformanceRate} />
      <DataModelTable data={measurementsFields.qcdrSinglePerformanceRate} />

      <h2 className='ds-text-heading--2xl' id={measurementsTitleAndId['Multi-Performance Rate']}>Multi-Performance Rate Measurements</h2>
      <p className='ds-text-body--lg'>
        Multi-Performance Rate Measurements are applicable to Quality measures. There are two types of Multi-Performance Rate Measurements: registry and normal. The difference between the two is that for Registry Multi-Performance Rate Measurements, the performanceRate field is both writable and required. Multi-Performance Rate Measurements contain multiple strata and the stratum field is required for each.
      </p>
      <CodeTab data={measurementsTabs.multiPerformanceRate} />
      <DataModelTable data={measurementsFields.multiPerformanceRate} />

      <h2 className='ds-text-heading--2xl' id={measurementsTitleAndId['Multi-Performance Rate Stratum']}>Multi-Performance Rate Stratum</h2>
      <p className='ds-text-body--lg'>
        A Multi-Performance Rate Stratum represents the performance data for a specified subset of the population, as described by the stratum field. Submissions should follow the specifications for population and stratum name, below is an example submission.
      </p>
      <CodeTab data={measurementsTabs.stratum} />
      <DataModelTable data={measurementsFields.stratum} />
    </div>
  );
};

export default Measurements;
