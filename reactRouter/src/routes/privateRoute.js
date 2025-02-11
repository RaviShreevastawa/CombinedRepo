import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { status } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        status ? (
          <Component {...props} />
        ) : (
          <Navigate to="/signin" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
