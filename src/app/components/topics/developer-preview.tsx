import React from 'react';
import { ExternalLink } from '../../../shared';

import envConfig from '../../../envConfig';

const DeveloperPreview = () => {
  return (
    <>
      <h2 className='ds-h2'>Developer Preview</h2>
      <p className='ds-text'>
        See updated documents <ExternalLink href={`${envConfig.cmsGithubIo}/qpp-developer-preview/introduction`} text='Developer Preview Testing Environment' />
      </p>
    </>
  );
};

export default DeveloperPreview;
