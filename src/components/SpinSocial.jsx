import React from 'react';
import img from '../assets/images/img.svg';
import img1 from '../assets/images/img1.svg';
import img2 from '../assets/images/img2.svg';
import img3 from '../assets/images/img3.svg';

function SpinSocial() {
  return (
    <section className="thetaBox2 gammaCard2">
        <div className="container">
            <h2 className="hbgtzymh2 text-center">Why Trust Spin Social</h2>
            <div className="row">
                <div className="col">
                    <div className="trustbox6 BdrShdwX8">
                        <img src={img} alt="" />
                        <h3 className='hbgtzymh3'>Exclusive Bonuses</h3>
                    </div>
                </div>
                <div className="col">
                    <div className="trustbox6 BdrShdwX8">
                        <img src={img1} alt="" />
                        <h3 className='hbgtzymh3'>VIP Community Access</h3>
                    </div>
                </div>
                <div className="col">
                    <div className="trustbox6 BdrShdwX8">
                        <img src={img2} alt="" />
                        <h3 className='hbgtzymh3'>24/7 Player Support</h3>
                    </div>
                </div>
                <div className="col">
                    <div className="trustbox6 BdrShdwX8">
                        <img src={img3} alt="" />
                        <h3 className='hbgtzymh3'>Quick & Easy Payouts</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SpinSocial;
