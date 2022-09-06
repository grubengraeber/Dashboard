import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [authentication, setAuthentication] = useState({});

    return (
        <AuthContext.Provider value={{ authentication, setAuthentication}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;