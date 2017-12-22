import React from 'react';
import 'uswds/dist/js/uswds.js';
import '@cmsgov/design-system-core/dist/index.css';
import '../styles/app.css';
import '../styles/temp-grid.css';
import '../styles/usa-banner.css';

class TermsOfService extends React.Component {
  render() {
    return (
      <div>
        <h1 className='ds-h1'>API Terms of Service Agreement</h1>
        <p className='ds-text'>Thank you for using The Centers for Medicare and Medicaid Services ("CMS") APIs and other developer services (collectively, "APIs"). By accessing or using our APIs, you are agreeing to the terms below as well as any relevant sections of CMS's <a href='https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Privacy-Policy.html' target='_blank' rel='noopener noreferrer'>Website Policies</a>.</p>

        <h2 className='ds-h2'>Scope</h2>
        <p className='ds-text'>The service ("API") through which you interact with CMS data is subject to these terms. Use of the API constitutes acceptance to these Terms.</p>

        <h2 className='ds-h2'>Data Rights and Usage</h2>
        <p className='ds-text'><b>Accounts/Registration</b></p>
        <p className='ds-text'>If you are using the API on behalf of an entity, you represent and warrant that you have authority to bind that entity to the Terms and by accepting the Terms, you are doing so on behalf of that entity (and all references to "you" in the Terms refer to you and that entity).</p>
        <p className='ds-text'>In order to access the API, you may be required to provide certain information (such as identification or contact details) as part of the registration process for the API, or as part of your continued use of the API. Any registration information you give to CMS must be accurate and up to date and you must inform us promptly of any updates so that we can keep you informed of any changes to the API or the Terms which may impact your usage of the API.</p>
        <p className='ds-text'>Developer credentials (such as passwords, keys, tokens, and client IDs) are intended to be used only by you and identify any software which you are using with the APIs. You will keep your credentials confidential and make reasonable efforts to prevent and discourage other API Clients from using your credentials. Developer credentials may not be embedded in open source projects.</p>
        <p className='ds-text'>You will only access (or attempt to access) an API by the means described in the documentation of that API. If CMS assigns you developer credentials (e.g., client IDs), you must use them with the applicable APIs.</p>
        <p className='ds-text'><b>Attribution</b></p>
        <p className='ds-text'>While not required, when using content, data, documentation, code, and related materials associated with the API in your own work, we ask that proper credit be given.</p>

        <h2 className='ds-h2'>Service Management</h2>
        <p className='ds-text'><b>Right to Limit</b></p>
        <p className='ds-text'>Your use of the API may be subject to certain limitations on access, calls, or use as set forth within this Agreement or otherwise provided by CMS. These limitations are designed to manage the load on the system, promote equitable access, and prevent abuse, and these limitations may be adjusted without notice, as deemed necessary by CMS. If CMS reasonably believes that you have attempted to exceed or circumvent these limits, your ability to use the API may be temporarily or permanently blocked. CMS may monitor your use of the API to improve the service or to ensure compliance with this Agreement.</p>

        <p className='ds-text'><b>Service Termination</b></p>
        <p className='ds-text'>If you wish to terminate this Agreement, you may do so by refraining from further use of the API. CMS reserves the right (though not the obligation) to: (1) refuse to provide the API to you, if it is CMS's opinion that use violates any CMS policy; or (2) terminate or deny you access to and use of all or part of the API at any time for any other reason which in its sole discretion it deems necessary to in order to prevent abuse. You may petition CMS to regain access to the API through the support email address provided by CMS for the API. If CMS determines in its sole discretion that the circumstances which led to the refusal to provide the API or terminate access to the API are no longer in existence, then CMS may restore your access. All provisions of this Agreement shall survive termination including, without limitation, warranty disclaimers, and limitations of liability.</p>

        <h2 className='ds-h2'>Liability</h2>
        <p className='ds-text'><b>Disclaimer of Warranties</b></p>
        <p className='ds-text'>The API platform is provided "as is" and on an "as-available" basis. While we will do our best to ensure the service is available and functional at all times, CMS hereby disclaim all warranties of any kind, express or implied, including without limitation the warranties of merchantability, fitness for a particular purpose, and non-infringement. CMS makes no warranty that data will be error free or that access thereto will be continuous or uninterrupted.</p>
        <p className='ds-text'><b>Limitations on Liability</b></p>
        <p className='ds-text'>In no event will CMS be liable with respect to any subject matter of this Agreement under any contract, negligence, strict liability or other legal or equitable theory for: (1) any special, incidental, or consequential damages; (2) the cost of procurement of substitute products or services; or (3) for interruption of use or loss or corruption of data.</p>
        <h2 className='ds-h2'>Disputes</h2>
        <p className='ds-text'>Any disputes arising out of this Agreement and access to or use of the API shall be governed by federal law.  Some APIs may have API specific Terms. If there is a conflict between these terms and additional terms applicable to a specific API, the additional terms will control for that conflict.</p>

        <h2 className='ds-h2'>No Waiver Rights</h2>
        <p className='ds-text'>CMS's failure to exercise or enforce any right or provision of this Agreement shall not constitute waiver of such right or provision.</p>
        <p className='ds-text'>Return to the <a href='https://qpp.cms.gov/resources/developers'>QPP Developer Tools</a>.</p>
      </div>
    );
  }
}

export default TermsOfService;
