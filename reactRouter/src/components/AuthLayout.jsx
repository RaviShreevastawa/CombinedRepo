import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthLayout = ({ children, authentication }) => {
  const { status } = useSelector((state) => state.auth);

  if (authentication && !status) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
};

export default AuthLayout;
