import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    const [authStateData, setAuthStateData] = useState({ ...storedUserData });

    const navigate = useNavigate();

    //TODO remember me functionallity comes here?
    //wrapping the auth call and checking for persisted user data in the local storage
    const getAuth = () => {
        console.log("from the authprovider", authStateData)
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        console.log("this is parsed data from storage", storedUserData)
        if (authStateData === null && storedUserData !== null) {
            setAuthStateData({ ...storedUserData });
            console.log("get stored Userdata", storedUserData)
            return storedUserData;
        }
        return authStateData;

    }
    const auth = getAuth();


    //setting userData in local storage
    const setAuth = (data) => {
        console.log("this is data to store in local storage", data)
        if (localStorage.getItem("userData") === null) {
            localStorage.setItem("userData", JSON.stringify(data))
        }

        setAuthStateData(data);
    }

    const logOut = () => {
        localStorage.clear();
        setAuthStateData({});
        navigate("/login")
    }



    return (
        <AuthContext.Provider value={{ auth, setAuth, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;