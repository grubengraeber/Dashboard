import axios from "../../axiosConfiguration";
import useAuth from "../../../hooks/useAuth";

const HOUSEHOLD_ENDPOINT = "/api/households/mock";

function getAccessToken() {
    const { auth } = useAuth();
    return auth.accessToken;
}

export const endpoints = {
    getHousehold: async () => {
        const accessToken = getAccessToken();
        const response = await axios.get(HOUSEHOLD_ENDPOINT, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            } 
        })
        return response;
    },
}

