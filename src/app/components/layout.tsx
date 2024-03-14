import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './header';
import LeftNav from './left-nav';
import Footer from './footer';
import SubscribeModal from './subscribe-modal';
import envConfig from '../../envConfig';
import { ExternalLink } from '../../shared';

export default function Layout() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Header />
            <main id='panel'>
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
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
                <Footer openModal={() => setShowModal(true)} />

            {showModal &&
                <>
                    <SubscribeModal closeModal={() => setShowModal(false)} />
                    <div id='modal-backdrop' className='modal-backdrop fade' />
                </>
            }
        </>
    )
}