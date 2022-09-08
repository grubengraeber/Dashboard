import axios from "../../axiosConfiguration"

const LOGIN_ROUTE = "/api/auth/login"


export const endpoints = {
    logUserIn: async (setIsError, setErrorMessage,
        setIsSuccess, setSuccessMessage, user, password, setAuthentication) => {
        console.log("trying login with user " + user + " and password " + password);
        try {
            const response = await axios.post(LOGIN_ROUTE,
                null,
                {
                    params: { "username": user, "password": password },
                    headers: {
                        "Access-Control-Allow-Origin": "http://localhost:8080"
                    }
                },
            );
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