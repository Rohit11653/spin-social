import React, { useState, useEffect } from 'react';
import choices from '../assets/images/choicesimg1.png';
import choices1 from '../assets/images/choicesimg2.png';
import choices2 from '../assets/images/choicesimg3.png';
import choices3 from '../assets/images/choicesimg4.png';
import choices4 from '../assets/images/choicesimg5.png';
import choices5 from '../assets/images/choicesimg6.png';
import choices6 from '../assets/images/choicesimg7.png';
import choices7 from '../assets/images/choicesimg8.png';
import choices8 from '../assets/images/choicesimg9.png';
import choices9 from '../assets/images/choicesimg10.png';

function EndlessFun() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const allImages = [
    choices, choices1, choices2, choices3, choices4,
    choices5, choices6, choices7, choices8, choices9
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile, allImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <section className="zetaItem1">
      <div className="container">
        <h2 className="hbgtzymh2 text-center">Endless Fun, Endless Choices!</h2>
        
        {isMobile && (
          <div className="mobile-slider-container position-relative mt-4">
            <div className="mobile-slider-wrapper overflow-hidden">
              <div 
                className="mobile-slider-track d-flex transition-transform"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {allImages.map((image, index) => (
                  <div key={index} className="mobile-slide w-100 flex-shrink-0 px-2">
                    <div className="zetaItem1-box BdrShdwX8">
                      <img src={image} alt={`Choices Image ${index + 1}`} className="w-100 h-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="slider-btn slider-btn-prev position-absolute top-50 start-0 translate-middle-y"
              onClick={prevSlide}
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                zIndex: 10,
                marginLeft: '10px'
              }}
            >
              ❮
            </button>
            <button 
              className="slider-btn slider-btn-next position-absolute top-50 end-0 translate-middle-y"
              onClick={nextSlide}
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                zIndex: 10,
                marginRight: '10px'
              }}
            >
              ❯
            </button>
            
            
          </div>
        )}

        {!isMobile && (
          <>
            <div className="row justify-content-center">
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices} alt="Choices Image" />
                </div>
              </div>
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices1} alt="Choices Image" />
                </div>
              </div>
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices2} alt="Choices Image" />
                </div>
              </div>
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices3} alt="Choices Image" />
                </div>
              </div>
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices4} alt="Choices Image" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices5} alt="Choices Image" />
                </div>
              </div>
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices6} alt="Choices Image" />
                </div>
              </div>
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices7} alt="Choices Image" />
                </div>
              </div>
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices8} alt="Choices Image" />
                </div>
              </div>
              <div className="col">
                <div className="zetaItem1-box BdrShdwX8">
                  <img src={choices9} alt="Choices Image" />
                </div>
              </div>
            </div>
          </>
        )}

        <div className="row justify-content-center mt-4">
           <div className='gammaCard21'>
                <button className="SwYt2E-jbtn" type="submit">Discover All Games</button>
           </div>
        </div>
      </div>
    </section>
  );
}

export default EndlessFun;