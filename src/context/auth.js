import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { logOutUser } from '../api/auth';
import { fetchCurrentUser } from '../api/user';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // Set token to local storage everytime token changes
  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  // Get user

  const retrieveUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { user } = await fetchCurrentUser();
        const userPayload = {
          id_user: user.userprofileIdUser,
          first_name: user.first_name,
          last_name: user.last_name,
        };
        setUser(userPayload);
      } catch (error) {
        console.error(error);
        setToken('');
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle logout
  const logOut = async () => {
    await logOutUser();
    setUser(null);
    setToken('');
    window.location.reload();
  };

  useEffect(() => {
    retrieveUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        getUser: () => user,
        setUser,
        getToken: () => token,
        setToken,
        isAuthenticated: () => token !== '',
        logOut,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
