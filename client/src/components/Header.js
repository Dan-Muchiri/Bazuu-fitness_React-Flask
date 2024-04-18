import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import useAuthStore from './authStore';
import ConfirmationDialog from './ConfirmationDialog';

function Header() {
  const { isLoggedIn, username, userPicture, userId, logout, deleteAccount } = useAuthStore();
  const history = useHistory();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pictureUrl, setPictureUrl] = useState('');

  const handleLogout = async () => {
    try {
      logout(history);
      setIsDropdownOpen(false); // Close the dropdown
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleDeleteAccount = async () => {
    setIsConfirmationOpen(true);
  };

  const handleAddProfilePicture = async () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePictureUrlChange = (e) => {
    setPictureUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a PATCH request to update the profile picture URL
      const response = await fetch(`/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ picture: pictureUrl }), 
      });
  
      if (response.ok) {
        // Reload the page to show the new profile picture
        window.location.reload();
      } else {
        console.error('Failed to update profile picture URL');
      }
    } catch (error) {
      console.error('Error updating profile picture URL:', error);
    }
  };
  
  
  const confirmDeleteAccount = async () => {
    try {
      deleteAccount(userId, () => {
        alert('Your account has been successfully deleted. You are welcome back anytime!');
        setIsDropdownOpen(false); // Close the dropdown
        setIsConfirmationOpen(false); // Close the confirmation dialog
        logout(history);
      });
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-section">
        <h1 className="header-title">
          Bazuu Fitness
          <span className="logo" role="img">
            🏋️‍♂️
          </span>
        </h1>
      </div>
      <div className="head-right-section">
        <Link to="/" className="home-button">Home</Link>
        {isLoggedIn && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/my-activities" className="home-button">My Activities</Link>
            <div style={{ position: 'relative' }}>
              <span 
                className="username home-button" 
                onClick={toggleDropdown}
              >
                <img src={userPicture} alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                {username}
              </span>
              {isDropdownOpen && (
                <div className="dropdown-menu" style={{ position: 'absolute', top: '100%', backgroundColor: '#333', padding: '10px', borderRadius: '5px', zIndex: 999 }}>
                  <button onClick={handleAddProfilePicture} className="dropdown-button">Profile Picture</button>
                  <button onClick={handleLogout} className="dropdown-button">Logout</button>
                  <button onClick={handleDeleteAccount} className="dropdown-button">Delete Account</button>
                </div>
              )}
            </div>
          </div>
        )}
        {!isLoggedIn && (
          <>
            <Link to="/login" className="home-button">Login</Link>
            <Link to="/sign-up" className="home-button">Sign Up</Link>
          </>
        )}
      </div>
      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={confirmDeleteAccount}
        message="Are you sure you want to delete your account? This action cannot be undone."
      />
      {isModalOpen && (
        <div className="confirmation-dialog" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }}>
          <div className="confirmation-dialog-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="pictureUrl" className="modal-label" style={{ color: 'black' }}>Add a Picture URL to change Profile Picture:</label>
              <input type="text" id="pictureUrl" name="pictureUrl" value={pictureUrl} onChange={handlePictureUrlChange} className="modal-input" style={{ width: '95%' }}/>
              <div className="button-container">
                <button type="submit" className="form-button" style={{ marginRight: '10px' }}>Submit</button>
                <button type="button" onClick={handleCloseModal} className="delete-button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </header>
  );
}

export default Header;
