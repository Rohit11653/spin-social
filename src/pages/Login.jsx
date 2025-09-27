import React, { useState } from 'react';
import register_img from '../assets/images/Register.png'

function Login() {
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
                      <h2 className="register-title">Log in to your account</h2>
                      <p className="register-subtitle pb-4">Join thousands of users worldwide, Get Bonus!</p>
                      
                      <div>
                       
                        
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
                        </div>
                        
                     
                        
                        <div className="checkbox-group checkbox-group1">
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
                              Remember me
                            </label>
                          </div>
                          
                          <div className="form-check-custom">
                            <label className="form-check-label-custom" htmlFor="terms">
                              <span>
                                Forget Password
                              </span>
                            </label>
                          </div>
                        </div>
                        
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="w-100 SwYt2E-jbtn mt-3"
                        >
                          Login
                        </button>
                        
                       <div className="login-link">  
                            Do not have an account? <a href="#" style={{color: '#ECC753'}}>Register Now</a>
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

export default Login;