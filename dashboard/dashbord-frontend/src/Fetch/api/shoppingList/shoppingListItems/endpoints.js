import axios from "../../../axiosConfiguration";

const ALL_ITEM_NAMES_ROUTE = "/api/shopping-list/items";




export const endpoints = {
    getItemNames: async (setItems, setIsError, setErrorText) => {
        try {
            axios.get(ALL_ITEM_NAMES_ROUTE)
            .then((response) => {
                setItems(response.data)
            })
        } catch(error) {
            if (error.response)  {
                setIsError(true)
                setErrorText(error.message)
            }
        }
    },
}