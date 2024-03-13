import React from "react";
import signUp from "./images/pexels-fauxels-3184418.webp";
import ContactForm from "./ContactForm";

const Contact = () => {

    const phoneNumber = '7203547497';

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`
    }

    const handleEmail = () => {
        const email = 'thefrisk4498@gmail.com';
        const subject = 'Interested in A New Website?';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
        window.location.href = mailtoLink;}

  return (
    <div className="contactContainer">
        <img src={signUp} alt="Sign Up" />
        <div className="contactOverlay text-center">
          <h2>Let's work on your project together!</h2>
          <h3>Give me a call!</h3>
          <h4 onClick={handleCall} >(720) 354 7497</h4>
          <h3>Or Send me an Email!</h3>
          <h4 onClick={handleEmail} >thefrisk4498@gmail.com</h4>
        </div>
        <ContactForm/>
    </div>
  );
};

export default Contact;
