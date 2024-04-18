// authStore.js
import create from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  userId: null,
  username: '',
  userPicture: '',
  checkSession: async () => {
    try {
      const response = await fetch('/check_session');
      if (response.ok) {
        const user = await response.json();
        set({ isLoggedIn: true, userId: user.id, username: user.username, userPicture: user.picture });
      } else {
        set({ isLoggedIn: false, userId: null, username: '', userPicture: '' });
      }
    } catch (error) {
      console.error('Error checking session:', error);
    }
  },
  login: async (credentials, history) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        const user = await response.json();
        set({ isLoggedIn: true, userId: user.userId, username: user.username, userPicture: user.picture });
        history.push('/');
      } else {
        const data = await response.json();
        if (response.status === 404) {
          // Email not found
          console.error(data.error);
          alert('Email not found');
        } else if (response.status === 401) {
          // Invalid password
          console.error(data.error);
          alert('Invalid password');
        } else {
          console.error(data.message);
          alert('An error occurred. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error occurred:', error);
      alert('An error occurred. Please try again later.');
    }
  },
  logout: async (history) => {
    try {
      const response = await fetch('/logout', {
        method: 'DELETE',
      });
      if (response.ok) {
        set({ isLoggedIn: false, userId: null, username: '', userPicture: '' });
        history.push('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  },
  deleteAccount: async (userId, handleLogout) => { // Pass userId as an argument
    try {
      const response = await fetch(`/users/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        handleLogout()
      } else {
        console.error('Delete account failed');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  },
}));

export default useAuthStore;
