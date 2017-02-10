import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="usa-footer usa-footer-slim" role="contentinfo">
        <div className="usa-footer-primary-section">
          <div className="usa-grid-full">
            <nav className="usa-footer-nav usa-width-two-thirds">
              <ul className="usa-unstyled-list">
                <li className="usa-width-one-fourth usa-footer-primary-content">
                  <a className="usa-footer-primary-link" href="">Primary link</a>
                </li>
                <li className="usa-width-one-fourth usa-footer-primary-content">
                  <a className="usa-footer-primary-link" href="">Primary link</a>
                </li>
                <li className="usa-width-one-fourth usa-footer-primary-content">
                  <a className="usa-footer-primary-link" href="">Primary link</a>
                </li>
                <li className="usa-width-one-fourth usa-footer-primary-content">
                  <a className="usa-footer-primary-link" href="">Primary link</a>
                </li>
              </ul>
            </nav>
            <div className="usa-width-one-third">
              <div className="usa-footer-primary-content usa-footer-contact_info">
                <p>(800) CALL-GOVT</p>
              </div>
              <div className="usa-footer-primary-content usa-footer-contact_info">
                <a href="mailto:info@agency.gov">info@agency.gov</a>
              </div>
            </div>
          </div>
        </div>

        <div className="usa-footer-secondary_section">
          <div className="usa-grid">
            <div className="usa-footer">
              <h3 className="usa-footer-slim-logo-heading">Centers for Medicare and Medicaid Services</h3>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
