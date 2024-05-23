import { LinkToId } from '../../../shared';
import { DocPageProps } from '../../../shared/types';

const AuthenticationAndAuthorization: React.FC<DocPageProps> = ({dataTestId}) => {
  return (
    <div data-testid={dataTestId}>
      <p className='qpp-docs-page-updated'>Last Updated: 08/26/2020</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}}>Submissions API Authentication and Authorization</h2>
      <p className='ds-text'>
        To submit directly to QPP using the Submissions API, Qualified Registries and QCDRs use CMS-provided tokens in their API calls. You can learn more about the Submissions API authentication and authorization model for Qualified Registries and QCDRs <LinkToId to='/qualified-registries-and-qcdrs' text='here' />.
      </p>

      <p className='ds-text'>
        We support OAuth Authentication, which provides client applications with secure, delegated access to the Submissions API. You can learn more about using OAuth with the Submissions API <LinkToId to='/getting-started-with-oauth' text='here' />.
      </p>
    </div>
  );
};

export default AuthenticationAndAuthorization;

