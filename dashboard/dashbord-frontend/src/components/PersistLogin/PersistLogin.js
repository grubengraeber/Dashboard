import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useRefreshToken } from "../../hooks/useRefreshToken";


export const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken();
    const { auth } = useAuth();
  useEffect(() => {
    const verifyRefreshToken = async () => {
        try {
            await refresh();
        } catch (error) {
            console.log(error.message)
        } finally {
            setIsLoading(false)
        }
    }
  }, [])
}
