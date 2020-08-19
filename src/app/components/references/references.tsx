import React from 'react';

import { ExternalLink } from '../../../shared';
import envConfig from '../../../envConfig';

const References = () => {
  return (
    <>
      <h2 className='ds-h2' id='references'>References</h2>

      <h3 className='ds-h3'>General References</h3>
      <ul>
        <li>
          Resource Library: <ExternalLink href={`${envConfig.qppCmsUrl}/about/resource-library`} />
        </li>
        <li>
          Developer Group for QPP APIs: <ExternalLink href={envConfig.googleGroupUrl} />
        </li>
      </ul>

      <h3 className='ds-h3'>Submissions and Scoring API</h3>
      <ul>
        <li>
          Interactive QPP Submissions API Documentation: <ExternalLink href={`${envConfig.qppCmsPreviewUrl}/api/submissions/public/docs`} />
        </li>
        <li>
          Measures, Activities, and Benchmarks Repository: <ExternalLink href={`https://github.com/CMSgov/qpp-measures-data`} />
        </li>
        <li>
          Explore Measures page: <ExternalLink href={`${envConfig.qppCmsUrl}/mips/explore-measures/quality-measures`} />
        </li>
        <li>
          QRDA III to JSON Conversion Tool in Production: <ExternalLink href={`https://github.com/CMSgov/qpp-conversion-tool`} />
        </li>
      </ul>

      <h3 className='ds-h3'>Eligibility API</h3>
      <ul>
        <li>
          QPP Participation Status Lookup Tool: <ExternalLink href={`${envConfig.qppCmsUrl}/participation-lookup`} />
        </li>
        <li>
          Interactive QPP Eligibility API Documentation: <ExternalLink href={`${envConfig.qppCmsUrl}/api/eligibility/docs`} />
        </li>
      </ul>

      <h3 className='ds-h3'>Authentication and Authorization API</h3>
      <ul>
        <li>
          Interactive AUTH API Documentation: <ExternalLink href={`${envConfig.qppCmsUrl}/api/auth/docs`} />
        </li>
      </ul>

      <h3 className='ds-h3'>CMS Web Interface API</h3>
      <ul>
        <li>
          Interactive Web Interface Documentation: <ExternalLink href={`${envConfig.qppCmsUrl}/api/submissions/web-interface/docs`} />
        </li>
      </ul>
    </>
  );
};

export default References;
