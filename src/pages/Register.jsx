import React, { useState } from 'react';
import register_img from '../assets/images/register.png'

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age18: false,
    terms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <>
      
      
      <section className="stylishBox2">
        <div className="container">
          <div className="row BdrShdwX8 align-items-center">
                  <div className="col-lg-7">
                    <div className="slot-machine-area">
                     <div className=''>
                        <img src={register_img} alt="" />
                    </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-5">
                    <div className="register-form-section">
                      <h2 className="register-title">Register an account</h2>
                      <p className="register-subtitle">Join thousands of users worldwide, Get Bonus!</p>
                      
                      <div>
                        <div className="form-group">
                          <label className="form-label">Full name</label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="form-control form-control-custom"
                          />
                        </div>
                        
                        <div className="form-group">
                          <label className="form-label">Email address</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-control form-control-custom"
                          />
                        </div>
                        
                        <div className="form-group">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="form-control form-control-custom"
                          />
                          <div className="password-hint">
                            Use 8+ characters with a mix of letters, numbers & symbols
                          </div>
                        </div>
                        
                        <div className="form-group">
                          <label className="form-label">Confirm Password</label>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="form-control form-control-custom"
                          />
                        </div>
                        
                        <div className="checkbox-group">
                          <div className="form-check-custom">
                            <input
                              type="checkbox"
                              name="age18"
                              checked={formData.age18}
                              onChange={handleInputChange}
                              className="form-check-input-custom"
                              id="age18"
                            />
                            <label className="form-check-label-custom" htmlFor="age18">
                              I confirm that I am 18 years older
                            </label>
                          </div>
                          
                          <div className="form-check-custom">
                            <input
                              type="checkbox"
                              name="terms"
                              checked={formData.terms}
                              onChange={handleInputChange}
                              className="form-check-input-custom"
                              id="terms"
                            />
                            <label className="form-check-label-custom" htmlFor="terms">
                              I agree to the Terms of Service and Cookie Policy
                            </label>
                          </div>
                        </div>
                        
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="w-100 SwYt2E-jbtn mt-3"
                        >
                          Register
                        </button>
                        
                        <div className="login-link">
                          Already have an account? <a href="#">Log in</a>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;