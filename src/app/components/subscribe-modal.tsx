import { useState } from 'react';

import envConfig from '../../envConfig';
import { LockBodyScroll } from '../../shared';

const DELAY = 400;

const SubscribeModal = ({ closeModal }: { closeModal: CallableFunction }) => {
  const [onModal, setOnModal] = useState(false);

  const closeModalOnClickOutsideModal = () => {
    if (!onModal) {
      removeInClassAndClose();
    }
  };

  // setTimeout is used here so that the css animation will run before the element is removed
  const removeInClassAndClose = () => {
    document.getElementById('modal-subscribe')?.classList.remove('in');
    document.getElementById('modal-backdrop')?.classList.remove('in');
    setTimeout(() => closeModal(), DELAY);
  };

  setTimeout(() => {
    document.getElementById('modal-subscribe')?.classList.add('in');
    document.getElementById('modal-backdrop')?.classList.add('in');
  }, DELAY);

  LockBodyScroll();

  return (
    <div id='modal-subscribe' className='modal fade show' tabIndex={-1}  role='dialog' aria-labelledby='modal-subscribe-label' onClick={closeModalOnClickOutsideModal}>
      <div className='modal-dialog modal-lg' data-testid='modal-toggle' onMouseEnter={() => setOnModal(true)} onMouseLeave={() => setOnModal(false)}>
        <div className='modal-content'>
          <div className='modal-header'>
            <button className='close' type='button' data-dismiss='modal' aria-label='Close' data-testid='close-button' onClick={() => removeInClassAndClose()}><span aria-hidden='true'>x</span></button>
            <h4 className='modal-title' id='modal-subscribe-label'>Subscribe to Email Updates</h4>
          </div>
          <div className='modal-body'>
            <div className='clearfix'>
              <div className='pull-left'><img src={`${envConfig.qppCmsUrl}/images/cms-logo.png`} width='245' height='86' title='CMS Centers for Medicare &amp; Medicaid Services' alt='CMS Centers for Medicare &amp; Medicaid Services' /></div>
              <div className='pull-left'>
                <h5>Centers for Medicare &amp; Medicaid Services</h5>
                <p className='small'><a href={envConfig.cmsUrl} target='_blank' rel='noopener noreferrer' aria-label='www.cms.gov This opens in a new window'>{envConfig.cmsUrl.slice(8)}&nbsp;</a>|&nbsp;<a href='https://www.medicaid.gov' target='_blank' rel='noopener noreferrer' aria-label='www.medicaid.gov This opens in a new window'>www.medicaid.gov&nbsp;</a>|&nbsp;<a href='https://www.medicare.gov' target='_blank' rel='noopener noreferrer' aria-label='www.medicare.gov This opens in a new window'>www.medicare.gov</a></p>
              </div>
            </div>
            <form target='_blank' action='https://public.govdelivery.com/accounts/USCMS/subscriber/qualify' acceptCharset='UTF-8' method='get' id='subscribe-submit-form'>
              <input type='hidden' name='topic_id' value='USCMS_12196' />
              <h3>Email Updates</h3>
              <p>To sign up for updates or to access your subscriber preferences, please enter your contact information below.</p>
              <div className='row'>
                <div className='col-sm-6 form-group'><label className='control-label' htmlFor='email'>* Email Address</label><input className='form-control' id='email' type='email' name='email' /></div>
                <div className='col-sm-12'>
                  <button className='btn btn-primary js-subscribe-submit' type='submit' name='commit' >Submit</button>
                  <br />
                  <br />
                  <button className='btn btn-tertiary' type='button' data-dismiss='modal' data-testid='cancel-button' onClick={() => removeInClassAndClose()}>Cancel</button></div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='modal-subscribe-footer'>
                    <p className='small'>Your contact information is used to deliver requested updates or to access your subscriber preferences.</p>
                    <hr />
                    <a target='_blank' rel='noopener noreferrer' href={`${envConfig.cmsUrl}/About-CMS/Agency-Information/Aboutwebsite/Privacy-Policy.html`} aria-label='Privacy Policy. This opens in a new window'>Privacy Policy</a>&nbsp;<a target='_blank' rel='noopener noreferrer' href='https://subscriberhelp.govdelivery.com/hc/en-us' aria-label='Help. This opens in a new window'>Help</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
