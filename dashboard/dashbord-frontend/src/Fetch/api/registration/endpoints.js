import axios from "../../axiosConfiguration"

// REGISTRATION FORM SUBMISSION
const REGISTRATION_POST = "/register";

// DEFAULT HEADER
const defaultConfiguratuion = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
}

export const endpoints = {

    postRegistration: async (payload, onSuccess, onError, setSuccessMessage, setErrorMessage) => {
        let response = null;
        try {
        response = await axios.post(REGISTRATION_POST, JSON.stringify(payload), defaultConfiguratuion);
        onSuccess()
        setSuccessMessage("Registration successful! You can log in now.")
    }   catch(error) {
            if (error.response) {
            } else if(error.respone.status) {
                if(error.respone.status === 409) {
                    console.log("Email Address Already Taken!")
                }
                console.log(error.response.status)   
            }
            else {
                console.log("No Server Response")
            }
            onError()
            setErrorMessage(error.message)
        }
        return response;
    },
}