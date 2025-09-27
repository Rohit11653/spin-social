import Banner_img from '../assets/images/banner-img.png'; 

function Banner() {
  return (
    <section className="ban-ner-sec-1">
      <div className='ban-ner-sec-2'>
        <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <div className='omegaDiv2'>
                <h1 className="hbgtzymh1">
                    Claim Your Welcome Coins Today!
                </h1>
                <p className="hbgtzymp pt-2">
                    Kick off your journey with Spin Social and collect free bonus coins
                    to start exploring thrilling games, social challenges, and endless fun.
                </p>
                <button className="SwYt2E-jbtn mt-2" type="submit">Get Welcome Bonus</button>
            </div>
          </div>
          <div className="col-md-5">
            <div className="sigmaCard1">
              <img src={Banner_img} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Banner;
