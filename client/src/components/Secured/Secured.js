import React from 'react';
import { Login } from '../Login/Login';

export const Secured = ({ children }) => {
  return (
    <div>
      {window.localStorage.getItem('spotifyToken') ? children : <Login />}
    </div>
  );
};
