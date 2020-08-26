import React from 'react';

import { LinkToId } from '../../../shared';

const AuthenticationAndAuthorization = () => {
  return (
    <>
      <p className='ds-text'>
        To submit directly to QPP using the Submissions API, Qualified Registries and QCDRs use CMS-provided tokens in their API calls. You can learn more about the Submissions API authentication and authorization model for Qualified Registries and QCDRs <LinkToId to='qualified-registries-and-qcdrs' text='here' />.
      </p>

      <p className='ds-text'>
        We support OAuth Authentication, which provides client applications with secure, delegated access to the Submissions API. You can learn more about using OAuth with the Submissions API <LinkToId to='getting-started-with-oauth' text='here' />.
      </p>
    </>
  );
};

export default AuthenticationAndAuthorization;

