import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import React from "react";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    /* state={{ from: location}} replace needed for browser memory 
    what the last page visited was for going back pages in browser */
    return  (
        auth && auth.user 
        ? <Outlet />
        : <Navigate to={"/login"} state={{ from: location}} replace />
    )
}

export default RequireAuth;