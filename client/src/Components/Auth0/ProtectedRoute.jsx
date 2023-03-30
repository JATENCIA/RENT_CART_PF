import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children, redirectTo = "/home" }) {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
