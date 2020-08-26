import React from 'react';

import { ExternalLink, LinkToId } from '../../../shared';
import envConfig from '../../../envConfig';

const Help = () => {
  return (
    <>
      <h2 className='ds-h2'>Help</h2>

      <p className='ds-text'>
        Please contact the Quality Payment Program Service Center <ExternalLink href={`${envConfig.qppCmsUrl}/about/help-and-support`} /> if you have policy or API questions.
        </p>

      <p className='ds-text'>
        For information around Quality Payment Program requirements, please visit <ExternalLink href={envConfig.qppCmsUrl} />
      </p>

      <p className='ds-text'>
        For frequently asked questions regarding APIs please see the <LinkToId to='frequently-asked-questions' text='FAQ Section' />
      </p>

      <p className='ds-text'>
        Please bring any questions not answered by our available documentation to the monthly support calls/Virtual Office Hours.  Or contact the Quality Payment Program service center: <ExternalLink href={`${envConfig.qppCmsUrl}/about/help-and-support`} />
      </p>
    </>
  );
};

export default Help;
