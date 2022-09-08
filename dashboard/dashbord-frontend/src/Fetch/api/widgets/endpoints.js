import axios from "../../axiosConfiguration"
// REQUEST BODY 
const requestBody = {}
// FETCHING HOME BADGE DATA
const LIST_ID_OF_LOGGED_IN_USER_GET = "/api/shopping-list/user"
const BUDGET_TRACKER_AMOUNT_GET = "/api/v1/budget/expenses/sum";
const SHOPPING_LIST_AMOUNT_GET = "/api/shopping-list/"

// DEFAULT HEADER
const header = {
    headers: {"Access-Control-Allow-Origin": "*"},
    timeout: 2000
  }

export const endpoints = {
    setBudgetTrackerAmount: async (setBudgetTrackerCount) => {
        try {
            await axios.get(BUDGET_TRACKER_AMOUNT_GET, requestBody, header)
            .then((answer) => {setBudgetTrackerCount(answer.data)})
        }   catch(error) {
                console.log(error.message)
        }
    },
    setShoppingListItemCount: async (setShoppingListEntryCount) => {
        try {
            await axios.get(LIST_ID_OF_LOGGED_IN_USER_GET, requestBody, header)
            .then((response) => {
                try {
                    axios.get(SHOPPING_LIST_AMOUNT_GET + response.data + "/count", requestBody, header)
                    .then((response) => {setShoppingListEntryCount(response.data)})
                } catch(error) {
                    console.log(error.message)
                }
            })
        }   catch(error) {
            console.log(error.message)
        }
    }
}