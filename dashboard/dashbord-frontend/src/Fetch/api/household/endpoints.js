import axios from "../../axiosConfiguration";
import useAuth from "../../../hooks/useAuth";

const HOUSEHOLD_ENDPOINT = "/api/households/mock";

export const endpoints = {
    getHousehold: async ({ bearerToken }) => {
        const response = await axios.get(HOUSEHOLD_ENDPOINT, {
            headers: {
                "Authorization": `Bearer ${bearerToken}`
            }
        })
        return response;
    },
}

