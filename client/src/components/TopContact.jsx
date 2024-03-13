import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TopContact = () => {

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
    <div>
        <div className='d-flex justify-content-center align-items-center p-2 topContact'>
            <button className='fw-bold btn p-1' onClick={handleEmail}>Email Me!<MdEmail size={25}/></button>
            <button className='fw-bold btn p-1' onClick={handleCall}><FaPhone size={25}/>Contact Me at (720) 354-7497</button>
        </div>
    </div>
  )
}

export default TopContact