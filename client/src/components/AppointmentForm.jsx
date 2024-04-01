import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { FaCheck } from 'react-icons/fa';
import { LiaTimesSolid } from "react-icons/lia";
import Success from './Success';

const AppointmentForm = ({onClose}) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    projectDetails: '',
  });

  const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;

  const [formSubmitted, setFormSubmitted] = useState(false)

  const validateForm = (formData) => {
    const newErrors = {};

    // Check if firstName is empty
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Check if lastName is empty
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
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

    // Check if projectDetails is empty
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (validateForm(formData)) {
      try {
        await emailjs.sendForm('service_bp1q448', 'template_f0csbra', e.target, apiKey);
        await emailjs.sendForm( 'service_bp1q448','template_nqcgyrt', e.target, apiKey);
        e.target.reset();
        setFormSubmitted(true); 
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
    <Container className='text-center appointment text'>
      {!formSubmitted ? (
        <div className="position-relative">
          <button className='close-button' style={{borderRadius:'.4rem', color:'red',marginRight:'100%'}} onClick={onClose}>
            <LiaTimesSolid size={35}/>
          </button>
          <div className='text-center'>
            <h2>Make an appointment</h2>
            <p>Fill out this form and we will get back to you as soon as possible!</p>
          </div>
          <form  onSubmit={sendEmail}>
            <div className='d-md-flex justify-content-evenly' style={{ paddingBottom: '1%' }}>
              <div>
                <label htmlFor='firstName'>First Name:</label>
                <br />
                <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor='lastName'>Last Name:</label>
                <br />
                <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
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
              <label htmlFor='projectDetails'>Tell Us about your project:</label>
              <br />
              <textarea name='projectDetails' cols='30' rows='2' value={formData.projectDetails} onChange={handleChange}></textarea>
              {errors.projectDetails && <p style={{ color: 'red' }}>{errors.projectDetails}</p>}
            </div>
            <div className='text-center'>
              <Button type='submit' style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'#00cc00' }}>
                <FaCheck style={{ marginRight: '5px' }} />
                Submit
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Success formData={formData} onClose={onClose}/>
      )}
    </Container>
  );
};

export default AppointmentForm;
