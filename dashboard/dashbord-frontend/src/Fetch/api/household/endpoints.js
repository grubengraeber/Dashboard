import axios from "../../axiosConfiguration";

const HOUSEHOLD_ENDPOINT = "/api/households/mock";
    
export const endpoints = {
    getHousehold: async () => {
            const response = await axios.get(HOUSEHOLD_ENDPOINT)
            return response;
    },
}

