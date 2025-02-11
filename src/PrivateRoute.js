import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;
