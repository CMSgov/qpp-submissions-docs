import React from 'react';

import envConfig from '../../envConfig';
import { ExternalLink } from '../../shared';

import '../../styles/components/footer.scss';

const Footer = ({ openModal }: { openModal: CallableFunction }) => {
  return (
    <footer>
      <div className='ds-l-container'>
        <div className='row'>
          <div className='col-sm-8 col-md-9 col-lg-9'>
            <div className='logo-container'>
              <img className='qpp-logo' src={`${envConfig.qppCmsUrl}/images/qpp_logo_reversed.png`} alt='qpp logo' />
            </div>
            <ul>
              <li>
                <ExternalLink href={`${envConfig.qppCmsUrl}/developers`} text='Developer Tools' />
              </li>
              <li>
                <ExternalLink href={`${envConfig.qppCmsUrl}/about/resource-library`} text='Resource Library' />
              </li>
              <li>
                <a href={`mailto:${envConfig.qppEmail}`}>Send Us Questions</a>
              </li>
              <li>
                <a href='#modal-subscribe' data-toggle='modal' data-target='#modal-subscribe' onClick={() => openModal()}>Subscribe to Updates</a>
              </li>
            </ul>
            <ul className='small'>
              <li>
                <ExternalLink href={`${envConfig.qppCmsUrl}/privacy`} text='CMS Privacy Notice' />
              </li>
              <li>
                <ExternalLink href={`${envConfig.qppCmsUrl}/accessibility`} text='Accessibility' />
              </li>
              <li>{envConfig.phoneNumber}</li>
              <li>TTY: {envConfig.TTYPhoneNumber}</li>
            </ul>
          </div>
          <div className='col-sm-4 col-md-3 col-lg-3'>
            <div className='hhs-logo-container'>
              <img alt='Center for Medicaid & Medicare Services' src={`${envConfig.qppCmsUrl}/images/hhs-logo-white.svg`} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
