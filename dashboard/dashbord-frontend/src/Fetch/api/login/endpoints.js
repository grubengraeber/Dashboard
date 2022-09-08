import axios from "../../axiosConfiguration"

const LOGIN_ROUTE = "/api/auth/login";
const USER_DETAILS = "/api/users/details/me";

export const endpoints = {
    logUserIn: async (setIsError, setErrorMessage,
        setIsSuccess, setSuccessMessage, user, password, setAuthentication,
        navigate, from) => {
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
                const access_token = response.data.access_token
                console.log("ACCESS TOKEN: " + access_token)
                let userDetails = await axios.get(USER_DETAILS, null,
                    {
                        headers: {
                            "Authorization": "Bearer " + access_token
                        }
                    })
                console.log(userDetails);
                const user = response.data.user
                const password = response.data.password
                const roles = response.data.roles
                
                setAuthentication({ user, password, roles, access_token })
                /* setIsSuccess(true)
                setSuccessMessage("You were logged in successfully.") */
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