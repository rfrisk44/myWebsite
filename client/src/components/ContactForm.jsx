import React, { useState } from 'react';
import {Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { FaCheck } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const ContactForm = () => {

    const [errors, setErrors] = useState({});
    const name = useState('')
    const [formData, setFormData] = useState({
        firstName: name,
        lastName: name,
        name:'',
        email: '',
        phoneNumber: '',
        projectDetails: 'This is Coming From the Contact Page'
    });

    const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;

  
    const [formSubmitted, setFormSubmitted] = useState(false)
  
    const validateForm = (formData) => {
      const newErrors = {};
  
      // Check if firstName is empty
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
  
      // Check if email is empty
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!isValidEmail(formData.email.trim())) { // Check if email is in valid format
        newErrors.email = 'Invalid email format';
      }
  
      // Check if phoneNumber is empty
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone number is required';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0; // Return true if there are no errors
    };
  
    const sendEmail = async (e) => {
      e.preventDefault();
  
      if (validateForm(formData)) {
        try {
          await emailjs.sendForm('service_bp1q448', 'template_f0csbra', e.target, apiKey);
          await emailjs.sendForm( 'service_bp1q448','template_nqcgyrt', e.target, apiKey)
          e.target.reset();
          setFormSubmitted(true)
        } catch (error) {
          console.error('Error sending email:', error);
          alert('Failed to submit form.');
        }
      }
    };
  
    const isValidEmail = (email) => {
      // Very basic email validation, you can use a more comprehensive validation library
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

  return (
    <div className='text-center contactForm'>
        <div>
            {formSubmitted ? (
                <div className='successContact'>
                    <h2>Thank You, I will contact you shortly!</h2>
                    <Link to='/'>
                        <p>Return Home</p>
                        <FaHome size={50}/>
                    </Link>
                </div>
            ): (
            <>
            <div>
                <h3>What To Expect?</h3>
                <ul>
                    <li>A Timely Response, usually within the hour</li>
                    <li>A Phone Call, if preferred</li>
                    <li>Undivided Attention</li>
                </ul>
            </div>
            <form  onSubmit={sendEmail}>
                <h1 style={{textDecoration:'underline'}}>Contact me</h1>
            <div className='d-md-flex justify-content-evenly' style={{ paddingBottom: '1%' }}>
              <div>
                <label htmlFor='name'>Name:</label>
                <br />
                <input type='text' name='name' value={formData.name} onChange={handleChange} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor='email'>Email:</label>
                <br />
                <input type='email' name='email' value={formData.email} onChange={handleChange} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor='phoneNumber'>Phone Number:</label>
              <br />
              <input type='tel' name='phoneNumber' pattern='[0-9]*' value={formData.phoneNumber} onChange={handleChange} />
              {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
              <br />
            </div>
            <div className='text-center'>
              <Button type='submit'>
                <FaCheck style={{ marginRight: '5px' }} />
                Submit
              </Button>
            </div>
          </form>
          </>
          )}
        </div>
    </div>
  )
}

export default ContactForm