import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import React from "react";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    /* state={{ from: location}} replace needed for browser memory 
    what the last page visited was for going back pages in browser */
    return  (
        <>
        {auth && auth.roles && auth.roles.find(role => allowedRoles.includes(role.name))
            ? <><Outlet /></>
            : auth && auth.user
                ? <><Navigate to={"/unauthorized"} state={{ from: location }} replace /></>
                : <><Navigate to={"/login"} state={{ from: location }} replace /></>}
        </>
        );
}

export default RequireAuth;