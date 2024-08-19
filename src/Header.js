import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import Popup from './Popup'; // Import the Popup component
import './Header.css';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePopupSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3555/api/Create', data);
      console.log('Response:', response.data);
      alert('Card is saved successfully!');
      setShowPopup(false); // Close the popup after submission
      window.location.reload();  
    } catch (error) {
      console.error('Error creating card:', error);
      alert('There was an error saving the card.');
    }
  };

  return (
    <header className="header">
      <div className="logo">Abstract | Help Center</div>
      <button className="submit-request-button" onClick={handlePopupOpen}>
        Submit a request
      </button>
      
      {/* Render the Popup component */}
      <Popup 
        show={showPopup} 
        handleClose={handlePopupClose} 
        handleSubmit={handlePopupSubmit} 
      />
    </header>
  );
};

export default Header;
