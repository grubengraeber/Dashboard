import axios from "../../axiosConfiguration";

const HOUSEHOLD_ENDPOINT = "/api/households/my";

export const endpoints = {
    getHousehold: async ({ bearerToken }) => {
        const response = await axios.get(HOUSEHOLD_ENDPOINT, {
            headers: {
                "Authorization": `Bearer ${bearerToken}`,
                "Access-Control-Allow-Origin": "*"

            }
        })
        return response;
    },
}

