import React from 'react';

import { ExternalLink, LinkToId } from '../../../shared';
import envConfig from '../../../envConfig';

const Announcements = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 06/08/2021</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Announcements</h2>

      <h3 className='ds-h3'>General</h3>
      <p className='ds-text'>
        See <ExternalLink href={`${envConfig.cmsGithubIo}/qpp-developer-preview-docs/announcements`} text='Developer Preview Announcements' />
      </p>

      <h3 className='ds-h3'>Submission API</h3>
      <ul>
        <li>
          Updates for traditional MIPS submissions and scoring for PY 2021 are now available.
          </li>
        <li>
          For APM participants only, APP submissions and scoring rules for PY2021 are now available.
          </li>
        <li>
          For APM participants who participate in the Primary Care First  (PCF) APM model, PCF model submissions to meet PCF model reporting requirements for PY2021 are now available.
          </li>
        <li>
          See <LinkToId to='change-log' text='Change Log' /> for specific details.
        </li>
      </ul>

      <h3 className='ds-h3'>Measures Repository</h3>
      <ul>
        <li>
          2021 Measures are published and available here: <ExternalLink href='https://github.com/CMSgov/qpp-measures-data/tree/develop/measures' />
          </li>
        <li>
          Additional attributes are added to support PY2021 submissions. See <LinkToId to='change-log' text='Change Log' /> for specific details.
          </li>
      </ul>
    </>
  );
};

export default Announcements;
