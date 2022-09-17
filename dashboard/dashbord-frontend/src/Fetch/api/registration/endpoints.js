import axios from "../../axiosConfiguration"

// REGISTRATION FORM SUBMISSION
const REGISTRATION_POST = "/api/auth/signup";

// DEFAULT HEADER

export const endpoints = {

    postRegistration: async (payload, onSuccess, onError, setSuccessMessage, setErrorMessage) => {
        let response = null;
        try {
            response = await axios.post(REGISTRATION_POST, payload);
            onSuccess()
            setSuccessMessage("Registration successful! You can log in now.")
        } catch (error) {
            if (error.response) {
                if (error.response.status) {
                    if (error.response.status === 409) {
                        console.log("Email Address Already Taken!")
                    }
                }
                console.log(error.response.status)
            } else {
                console.log(error.message)
                console.log("No Error.Response.")
            }
            onError()
            setErrorMessage(error.message)
        }
        return response;
    },
}