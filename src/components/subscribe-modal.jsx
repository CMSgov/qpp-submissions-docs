import React from 'react';

class SubscribeModal extends React.PureComponent {
  render() {
    return (
      <div id="modal-subscribe" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-subscribe-label">
        <div className="modal-dialog modal-lg">
           <div className="modal-content">
              <div className="modal-header">
                 <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                 <h4 className="modal-title" id="modal-subscribe-label">Subscribe to Email Updates</h4>
              </div>
              <div className="modal-body">
                 <div className="clearfix">
                    <div className="pull-left"><img src="https://qpp.cms.gov/images/cmsLogo.jpg" width="245" height="86" title="CMS Centers for Medicare &amp; Medicaid Services" alt="CMS Centers for Medicare &amp; Medicaid Services"></img></div>
                    <div className="pull-left">
                       <h5>Centers for Medicare &amp; Medicaid Services</h5>
                       <p className="small"><a href="https://www.cms.gov" target="_blank" aria-label="www.cms.gov This opens in a new window">www.cms.gov&nbsp;</a>|&nbsp;<a href="https://www.medicaid.gov" target="_blank" aria-label="www.medicaid.gov This opens in a new window">www.medicaid.gov&nbsp;</a>|&nbsp;<a href="https://www.medicare.gov" target="_blank" aria-label="www.medicare.gov This opens in a new window">www.medicare.gov</a></p>
                    </div>
                 </div>
                 <form target="_blank" action="https://public.govdelivery.com/accounts/USCMS/subscriber/qualify" accept-charset="UTF-8" method="get" id="subscribe-submit-form">
                    <input type="hidden" name="topic_id" value="USCMS_12196"></input>
                    <h3>Email Updates</h3>
                    <p>To sign up for updates or to access your subscriber preferences, please enter your contact information below.</p>
                    <div className="row">
                       <div className="col-sm-6 form-group"><label className="control-label" for="email">* Email Address</label><input className="form-control" id="email" type="email" name="email"></input></div>
                       <div className="col-sm-12"><button className="btn btn-primary js-subscribe-submit" type="submit" name="commit" onclick="document.getElementById('subscribe-submit-form').submit();">Submit</button><br/><br/><button className="btn btn-tertiary" type="button" data-dismiss="modal">Cancel</button></div>
                    </div>
                    <div className="row">
                       <div className="col-sm-12">
                          <div className="modal-subscribe-footer">
                             <p className="small">Your contact information is used to deliver requested updates or to access your subscriber preferences.</p>
                             <hr/>
                             <a target="_blank" href="http://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Privacy-Policy.html" aria-label="Privacy Policy. This opens in a new window">Privacy Policy</a> ‐&nbsp;<a target="_blank" href="https://subscriberhelp.govdelivery.com/hc/en-us" aria-label="Help. This opens in a new window">Help</a>
                          </div>
                       </div>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </div>
    );
  }
}

export default SubscribeModal;
