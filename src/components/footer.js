import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8 col-md-9 col-lg-9'>
              <div className='logo-container'>
                <img className='qpp-logo' src='https://qpp.cms.gov/images/qpp_logo_reversed.png' alt='qpp logo' />
              </div>
              <div className='links'>
                <ul>
                  <li>
                    <a href='https://qpp.cms.gov/developers'>Developer Tools</a>
                  </li>
                  <li>
                    <a href='https://qpp.cms.gov/about/resource-library' >Resource Library</a>
                  </li>
                  <li>
                    <a href='mailto:QPP@cms.hhs.gov'>Send Us Questions</a>
                  </li>
                  <li>
                    <a href='#modal-subscribe' data-toggle='modal' data-target='#modal-subscribe'>Subscribe to Updates</a>
                  </li>
                </ul>
                <ul className='small'>
                  <li>
                    <a href='https://qpp.cms.gov/privacy'>CMS Privacy Notice</a>
                  </li>
                  <li>
                    <a href='https://qpp.cms.gov/accessibility'>Accessibility</a>
                  </li>
                  <li>1-866-288-8292</li>
                  <li>TTY: 1-877-715-6222</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-4 col-md-3 col-lg-3'>
              <div className='hhs-logo-container'>
                <img alt='Center for Medicaid & Medicare Services' src='https://qpp.cms.gov/images/hhs-logo-white.svg' />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
