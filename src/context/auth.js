import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../api/user';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  // Set token to local storage everytime token changes
  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  // Get user

  const retrieveUser = async () => {
    console.log('Retrieving user');
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const user = await fetchCurrentUser();
        console.log('User fetched');
        const userPayload = {
          id_user: user.userprofileIdUser,
          first_name: user.first_name,
          last_name: user.last_name,
        };
        setUser(userPayload);
      } catch (error) {
        console.error(error);
        setToken('');
      }
    }
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
