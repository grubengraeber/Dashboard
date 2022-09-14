
// const BASE_URI = "http://localhost:8080/";


//Budget Endpoints
const EXPENSES_ENDPOINT = "http://localhost:8080/api/v1/budget/expenses";
const CHARTDATA_ENDPOINT = "http://localhost:8080/api/v1/budget/expenses/chart";

//User Endpoints
// const USER_DETAILS_ENDPOINT = BASE_URI + "/api/users/me";

// Expense Enpoints
const EXPENSE_CATEGORIES_ENDPOINT = "http://localhost:8080/api/v1/budget/expenses/categories";

// ShoppingList Endpoints
const SHOPPING_LIST_ENDPOINT = "http://localhost:8080/api/shopping-list";


const buildAuthHeader = (auth) => {
    console.log("build header" + auth.auth.accessToken)
    return { 'Authorization': 'Bearer ' + auth.auth.accessToken }
}


export const endpoints = {


    getExpenses: async function (auth) {
        console.log("here is the auth");
        console.log(auth);
        const response = await fetch(EXPENSES_ENDPOINT,
            {
                headers: buildAuthHeader(auth)
            });
        return response.json();
    },
    getChartData: async function (auth) {
        const response = await fetch(CHARTDATA_ENDPOINT, {
            headers: buildAuthHeader(auth)
        });
        console.log(auth)

        return response.json();
    },
    getShoppingList: async function (auth) {
        const response = await fetch(SHOPPING_LIST_ENDPOINT, {
            headers: buildAuthHeader(auth)
        });
        console.log(auth)

        return response.json();
    },
    getExpenseCategories: async function (auth) {
        const response = await fetch(EXPENSE_CATEGORIES_ENDPOINT,
            {
                headers: buildAuthHeader(auth)
            });
        console.log(auth)

        return response.json();
    },
    postExpense: async function (auth, payload) {
        console.log(auth)

        const response = await fetch(EXPENSES_ENDPOINT, {
            method: 'POST',
            headers: {
                ...{ 'Content-Type': 'application/json' },
                ...auth
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    },
    deleteExpense: async function (auth, expenseId) {
        await fetch(EXPENSES_ENDPOINT + "/" + expenseId, {
            method: 'DELETE',
            headers: buildAuthHeader(auth)
        });

    },

    getUserDetails: async function (authToken) {
        // const bearerToken = 'Bearer ' + authToken
        // const response = await fetch(USER_DETAILS_ENDPOINT, {
        //    headers: { 'Authentication': authToken }
        // })

    }



}


