import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function ProtectedRoute({ children }) {
  const session = Cookies.get('session');
  

  if (session && Object.keys(session).length > 0) {
    return children;
  }

  return <Navigate to="/" />;
}
