import axios from "../../axiosConfiguration"

const LOGIN_ROUTE = "/api/auth/login";
const USER_DETAILS = "/api/users/details/me";

export const endpoints = {
    logUserIn: async (setIsError, setErrorMessage,
        setIsSuccess, setSuccessMessage, user, password, setAuthentication,
        navigate, from) => {
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
                const accessToken = response.data.access_token
                console.log()
                let userDetails = await axios.get(USER_DETAILS,
                    {
                        headers: {
                            "Authorization": `Bearer ${accessToken}`
                        }
                    },
                );
                const user = userDetails.data.username
                const password = userDetails.data.password
                const roles = userDetails.data.roles
                const firstName = userDetails.data.firstName
                const lastName = userDetails.data.lastName
                const authenticationObject = { user, password, roles, accessToken, firstName, lastName };
                console.log(authenticationObject)
                setAuthentication(authenticationObject)

                setIsSuccess(true)
                setSuccessMessage("You were logged in successfully.")
                navigate(from, { replace: true });
            }
        } catch (error) {
            setIsError(true);
            if (!error.response) {
                setErrorMessage(error.message)
            } else if (error.response.status === 400) {
                setErrorMessage("Missing Username or Password.")
            } else if (error.response.status === 401) {
                setErrorMessage("Unauthorized.")
            } else if (error.response.status === 403) {
                setErrorMessage("Wrong Password.")
            } else {
                setErrorMessage(error.message)
            }
        }
    }
}