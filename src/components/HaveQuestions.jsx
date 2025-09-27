import React, { useState } from 'react';

function HaveQuestions() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  const faqData = [
    {
      question: "How do I join Spin Social?",
      answer: "Simply click the 'Sign Up' button and start your adventure in less than a minute."
    },
    {
      question: "How do I claim daily coins?",
      answer: "Daily coins can be claimed by logging into your account each day. Visit the rewards section and click on the daily bonus to collect your free coins."
    },
    {
      question: "Can I play for real rewards?",
      answer: "Yes! Spin Social offers various real rewards that you can earn through gameplay. Check out our rewards catalog to see available prizes and redemption options."
    },
    {
      question: "What type of games are available?",
      answer: "We offer a wide variety of slot games, including classic 3-reel slots, modern video slots, progressive jackpots, and themed games with exciting bonus features."
    },
    {
      question: "Can I play with my phone?",
      answer: "Absolutely! Spin Social is fully optimized for mobile devices. You can play on your smartphone or tablet through our mobile app or web browser."
    }
  ];

  const sectionStyle = {
    color: '#ffffff',
    minHeight: '100vh',
    padding: '60px 0'
  };

  const accordionItemStyle = {
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '10px',
    marginBottom: '15px'
  };

  const accordionButtonStyle = {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: '700',
    padding: '16px 20px',
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer'
  };
  
  return (
    <section className="betaBlock2" style={sectionStyle}>
      <div className="container">
        <div className="row align-items-center betaBlock2-img">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h2 className="hbgtzymh2">
              Have Questions? We've
              Got You Covered!
            </h2>
            
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div className='BdrShdwX8' key={index} style={accordionItemStyle}>
                  <button className=''
                    style={accordionButtonStyle}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>
                      {openAccordion === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  {openAccordion === index && (
                    <div style={{
                      padding: '0 20px 20px 20px',
                      color: '#cccccc',
                      backgroundColor: '#1a1a1a',
                      borderRadius: '0 0 10px 10px',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default HaveQuestions;