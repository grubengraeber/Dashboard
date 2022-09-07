import { useQuery } from "@tanstack/react-query"
import axios from "../../axiosConfiguration"

const USER_DETAILS_PATH = "/api/auth/login"

const CONFIGURATION = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const endpoints = {
    getUserDetails: async (setIsError, setErrorMessage,
        setIsSuccess, setSuccessMessage, user, password, setAuthentication) => {
        const DATA = JSON.stringify({ user, password })
        try {
            const response = await axios.get(USER_DETAILS_PATH, DATA);
            if (response.data) {
                console.log(response.data)

                const user = response.data.user
                const password = response.data.password
                const roles = response.data.roles
                const accessToken = response.data.accessToken
                console.log("accessToken = " + accessToken)
                setAuthentication({ user, password, roles, accessToken })
                setIsSuccess(true)
                setSuccessMessage("You were logged in successfully.")
            }
        } catch (error) {
            setIsError(true);
            if (!error.response) {
                setErrorMessage(error.message)
            } else if (error.response.status === 400) {
                setErrorMessage("Missing Username or Password.")
            } else if (error.response.status === 401) {
                setErrorMessage("Unauthorized.")
            } else {
                setErrorMessage(error.message)
            }
        }
    }
}