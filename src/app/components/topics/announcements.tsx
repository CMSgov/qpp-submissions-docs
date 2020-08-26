import React from 'react';

import { ExternalLink, LinkToId } from '../../../shared';
import envConfig from '../../../envConfig';

const Announcements = () => {
  return (
    <>
      <h2 className='ds-h2'>Announcements</h2>

      <h3 className='ds-h3'>General</h3>
      <p className='ds-text'>
        See <ExternalLink href={`${envConfig.cmsGithubIo}/qpp-developer-preview-docs/announcements`} text='Developer Preview Announcements' />
      </p>

      <h3 className='ds-h3'>Submission API</h3>
      <ul>
        <li>
          Support for APM Entity Submissions:
          </li>
        <ul>
          <li>
            Registries can now submit MIPs Quality data for APM Entities through the Submissions API
            </li>
          <li>
            2020 Measures are published and available here: <ExternalLink href='https://github.com/CMSgov/qpp-measures-data' />
          </li>
        </ul>
        <li>
          API Cleanup and Improvements:
          </li>
        <ul>
          <li>
            Validations were added to help ensure accurate data is being submitted
            </li>
          <li>
            Error messages were improved for the Submissions API
            </li>
        </ul>
        <li>
          See <LinkToId to='change-log' text='Change Log' /> for specific details
        </li>
      </ul>

      <h3 className='ds-h3'>Measures Repository</h3>
      <ul>
        <li>
          Measures Repository Cleanup and Improvements:
          </li>
        <ul>
          <li>
            Measure attributes that are no longer used were deprecated
            </li>
        </ul>
        <li>
          See <LinkToId to='change-log' text='Change Log' /> for specific details
        </li>
      </ul>
    </>
  );
};

export default Announcements;
