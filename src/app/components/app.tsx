import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { combinedRoutes } from '../routes';

import Header from './header';
import LeftNav from './left-nav';
import Footer from './footer';
import SubscribeModal from './subscribe-modal';
import envConfig from '../../envConfig';
import { ExternalLink } from '../../shared';
import NotFound from './notFound/not-found';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <main id='panel'>
        <Header />

        <div className='qpp-docs-title-container'>
          <div className='ds-l-container'>
            <ExternalLink href={`${envConfig.qppCmsUrl}/developers`} text='&lt; back to QPP Developer Tools' attrs={{ className: 'qpp-docs-title-back' }} />
            <h3 className='qpp-docs-title-text'>QPP Submissions API Documentation</h3>
          </div>
        </div>

        <div className='ds-l-container'>
          <div className='ds-l-row'>

            <div className='ds-l-col--3 ds-u-padding-top--4 ds-u-display--none ds-u-sm-display--block'>
              <div className='content-block'>
                <LeftNav />
              </div>
            </div>
            <div className='ds-u-padding-top--4 ds-l-col--12 ds-l-sm-col--9'>
              <div className='content-block ds-u-padding--3'>
                <Switch>
                  {combinedRoutes.map(({ path, exact, component }, i) =>
                    <Route
                      key={i}
                      path={path}
                      exact={exact}
                      component={component}
                    />,
                  )}
                  <Route
                    component={NotFound}
                  />
                </Switch>
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
