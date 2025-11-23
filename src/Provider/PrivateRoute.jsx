import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const {user,loading} = use(AuthContext);
  // console.log(user);
   
  if(loading){
    return <Loading></Loading>
  }

  // If user exists and has email, return children
  if (user && user?.email) {
    return children;
  }

  // If no user, navigate to login page
  return <Navigate to="/auth/login" />;
};

export default PrivateRoute;


// correct also


/* import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  
  if (loading) {
    return <span className="loading loading-infinity loading-xl"></span>;
  }

  if (!user) {
    
    return <Navigate to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute; */

// 

/* import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
   const location = useLocation();
  if (loading) {
    return <span className="loading loading-infinity loading-xl"></span>;
  }

  if (!user) {
     return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
    return <Navigate to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute; */