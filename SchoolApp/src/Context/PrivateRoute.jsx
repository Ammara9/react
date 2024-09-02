import React, { useContext, useNavigate } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from './auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user ? (
         
          (() => {
            navigate('/login');
            return null;
          })()
        ) : (
          <RouteComponent {...routeProps} />
        )
      }
    />
  );
};

export default PrivateRoute;



