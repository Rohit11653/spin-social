import footer_logo from '../assets/images/logo.png';
function Footer() {
  return (
    <footer className="alphaClass1-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="alphaClass1">
              <img src={footer_logo} alt="" />
              <p className='hbgtzymp'>
                NO PURCHASE IS NECESSARY to play. PROMOTIONS ARE VOID WHERE PROHIBITED BY LAW. For detailed rules, see Terms of Use & Sweepstakes Rules. Chanced.com Social Gaming Platform is a play-for-fun website intended for amusement purposes only. Chanced.com's Social Gaming Platform does not offer “real-money gambling” or the opportunity to win real money. Chanced.com Social Gaming Platform is only open to Eligible Participants, who are at least eighteen (18) years old or the age of majority in their jurisdiction (whichever occurs later) at the time of entry.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alphaClass2">
              <h4>
                Services
              </h4>
              <span>
                Partners:
              </span>
              <p className='hbgtzymp'>
                partners@SpinSocials.com
              </p>
              <span>
                Support:
              </span>
              <p className='hbgtzymp'>
                help@SpinSocial.com
              </p>
              <span>
                Payment Related Questions:
              </span>
              <p className='hbgtzymp'>+ (880) 23416 83514</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="alphaClass3">
              <h4>
                Hyperlinks
              </h4>
              <ul>
                <li><a href="#">Cookie Policy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Sweeps Rules</a></li>
                <li><a href="#">Customer Acceptance Policy</a></li>
                <li><a href="#">Responsible Social Policy</a></li>
              </ul>
            </div>
          </div>
          <div className='hbgtzymp2'>
            <p className='hbgtzymp text-center'>© 2025. Spin Social. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
