
import play from '../assets/images/play.svg';
import fast from '../assets/images/fast.svg';
import daily from '../assets/images/daily.svg';
function TrustSection() {
  return (
    <section className="thetaBox2">
        <div className="container">
            <h2 className="hbgtzymh2 text-center">Why Trust Spin Social</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="trustbox6 BdrShdwX8">
                        <img src={play} alt="" />
                        <h3 className='hbgtzymh3'>Safe & Reliable Play</h3>
                        <p className='hbgtzymp'>Our secure platform ensures worry-free fun with every game.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="trustbox6 BdrShdwX8">
                        <img src={fast} alt="" />
                        <h3 className='hbgtzymh3'>Fast & Secure Transactions</h3>
                        <p className='hbgtzymp'>Deposits and withdrawals are processed quickly with trusted payment partners.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="trustbox6 BdrShdwX8">
                        <img src={daily} alt="" />
                        <h3 className='hbgtzymh3'>Daily Free Bonuses</h3>
                        <p className='hbgtzymp'>Stay active and Spin Social daily coin drops to keep the fun going.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default TrustSection;
