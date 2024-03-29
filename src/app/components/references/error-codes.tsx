import { ExternalLink } from '../../../shared';

const ErrorCodes = () => {
  return (
    <>
      <p className='qpp-docs-page-updated'>Last Updated: 08/31/2022</p> {/* IMPORTANT: update this Last-Updated value if you have made any changes to this page's content. */}
      <h2 className='ds-h2' style={{marginTop: 0}} id='references'>Error Codes</h2>

      <h3 className='ds-h4'>The Submissions API Error Codes summary can be found in the <ExternalLink href={`https://cmsgov.github.io/qpp-developer-preview-docs/error-codes`} text='Developer Preview Documentation' /></h3>
    </>
  );
};

export default ErrorCodes;