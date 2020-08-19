import React from 'react';

import envConfig from '../../envConfig';

const Header = () => {
  return (
    <header id='top'>
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='ds-l-container'>
          <div className='navbar-header'>
            <div className='header-mobile-brand'>
              <a className='header-brand' href={envConfig.qppCmsUrl}>
                <img className='qpp-logo' src={`${envConfig.qppCmsUrl}/images/qpp_logo_rgb_color.png`} alt='qpp logo' />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
