import React from 'react';
import { LiaTimesSolid } from "react-icons/lia";

const Success = ({ formData, onClose }) => {
  return (
    <div>
      <button onClick={onClose} className='close-button'>
        <LiaTimesSolid size={35}/>
      </button>
      <div>
        <h2>Thank You for Choosing My Service!</h2>
        <p>Dear {formData.firstName} {formData.lastName},</p>
        <p>I wanted to take a moment to express my sincerest gratitude for choosing my services. Your decision means a great deal to me, and I am truly honored to have the opportunity to work with you.</p>
        <p>Rest assured, your request has been received, and you'll soon find a confirmation email in your inbox detailing the next steps and providing any additional information you may need.</p>
        <p>Warm regards,</p>
        <p>Ryan Frisk</p>
      </div>
    </div>
  );
}

export default Success;
