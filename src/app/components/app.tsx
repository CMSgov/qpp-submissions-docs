import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { combinedRoutes } from '../routes';

import Header from './header';
import DropdownNav from './dropdown-nav';
import LeftNav from './left-nav';
import Footer from './footer';
import SubscribeModal from './subscribe-modal';
import envConfig from '../../envConfig';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <main id='panel'>
        <Header />

        <div className='qpp-docs-title-container'>
          <div className='ds-l-container'>
            <a className='qpp-docs-title-back' href={`${envConfig.qppCmsUrl}/developers`}>&lt; back to QPP Developer Tools</a>
            <h3 className='qpp-docs-title-text'>QPP Submissions API Documentation</h3>
          </div>
        </div>

        <div className='ds-l-container'>
          <div className='ds-l-row'>

            <div className='ds-l-col--12 ds-u-padding-top--3 ds-u-display--block ds-u-sm-display--none'>
              <DropdownNav />
            </div>

            <div className='ds-l-col--3 ds-u-padding-top--4 ds-u-display--none ds-u-sm-display--block'>
              <div className='content-block'>
                <LeftNav />
              </div>
            </div>

            <div className='ds-u-padding-top--4 ds-l-col--12 ds-l-sm-col--9'>
              <div className='content-block ds-u-padding--3'>
                {combinedRoutes.map(({ path, exact, component }, i) => (
                  <Route
                    key={i}
                    path={path}
                    exact={exact}
                    component={component}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer openModal={() => setShowModal(true)} />
      </main>

      {showModal &&
        <>
          <SubscribeModal closeModal={() => setShowModal(false)} />
          <div id='modal-backdrop' className='modal-backdrop fade' />
        </>
      }
    </>
  );
};

export default App;
