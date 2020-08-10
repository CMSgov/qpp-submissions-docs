import React from 'react';

class References extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ds-h2' id='references'>References</h2>

        <h3 className='ds-h3'>General References</h3>
        <ul>
          <li>
            Resource Library: <a href='https://qpp.cms.gov/about/resource-library' target='_blank' rel='noopener noreferrer'>qpp.cms.gov/about/resource-library</a>
          </li>
          <li>
            Developer Group for QPP APIs: <a href='https://groups.google.com/forum/#!forum/qpp-apis' target='_blank' rel='noopener noreferrer'>groups.google.com/forum/#!forum/qpp-apis</a>
          </li>
        </ul>

        <h3 className='ds-h3'>Submissions and Scoring API</h3>
        <ul>
          <li>
            Interactive QPP Submissions API Documentation: <a href='https://preview.qpp.cms.gov/api/submissions/public/docs' target='_blank' rel='noopener noreferrer'>preview.qpp.cms.gov/api/submissions/public/docs</a>
          </li>
          <li>
            Measures, Activities, and Benchmarks Repository: <a href='https://github.com/CMSgov/qpp-measures-data' target='_blank' rel='noopener noreferrer'>github.com/CMSgov/qpp-measures-data</a>
          </li>
          <li>
            Explore Measures page: <a href='https://qpp.cms.gov/mips/explore-measures/quality-measures' target='_blank' rel='noopener noreferrer'>qpp.cms.gov/mips/explore-measures/quality-measures</a>
          </li>
          <li>
            QRDA III to JSON Conversion Tool in Production: <a href='https://github.com/CMSgov/qpp-conversion-tool' target='_blank' rel='noopener noreferrer'>github.com/CMSgov/qpp-conversion-tool</a>
          </li>
        </ul>

        <h3 className='ds-h3'>Eligibility API</h3>
        <ul>
          <li>
            QPP Participation Status Lookup Tool: <a href='https://qpp.cms.gov/participation-lookup' target='_blank' rel='noopener noreferrer'>qpp.cms.gov/participation-lookup</a>
          </li>
          <li>
            Interactive QPP Eligibility API Documentation: <a href='https://qpp.cms.gov/api/eligibility/docs' target='_blank' rel='noopener noreferrer'>qpp.cms.gov/api/eligibility/docs</a>
          </li>
        </ul>

        <h3 className='ds-h3'>Authentication and Authorization API</h3>
        <ul>
          <li>
            Interactive AUTH API Documentation: <a href='https://qpp.cms.gov/api/auth/docs' target='_blank' rel='noopener noreferrer'>qpp.cms.gov/api/auth/docs</a>
          </li>
        </ul>

        <h3 className='ds-h3'>CMS Web Interface API</h3>
        <ul>
          <li>
            Interactive Web Interface Documentation: <a href='https://qpp.cms.gov/api/submissions/web-interface/docs' target='_blank' rel='noopener noreferrer'>qpp.cms.gov/api/submissions/web-interface/docs</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default References;
