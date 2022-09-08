
const BASE_URI = "http://localhost:8080/";
//Budget Endpoints
const EXPENSES_ENDPOINT = "http://localhost:8080/api/v1/budget/expenses";
const CHARTDATA_ENDPOINT = "http://localhost:8080/api/v1/budget/expenses/chart";

//User Endpoints
const USER_DETAILS_ENDPOINT = BASE_URI + "/api/users/me";

// Expense Enpoints
const EXPENSE_CATEGORIES_ENDPOINT = "http://localhost:8080/api/v1/budget/expenses/categories";

// ShoppingList Endpoints
const SHOPPING_LIST_ENDPOINT = "http://localhost:8080/api/shopping-list";

export const endpoints = {

    getExpenses: async function () {
        const respone = await fetch(EXPENSES_ENDPOINT);
        return respone.json();
    },
    getChartData: async function () {
        const respone = await fetch(CHARTDATA_ENDPOINT);
        return respone.json();
    },
    getShoppingList: async function () {
        const respone = await fetch(SHOPPING_LIST_ENDPOINT);
        return respone.json();
    },
    getExpenseCategories: async function () {
        const response = await fetch(EXPENSE_CATEGORIES_ENDPOINT);
        return response.json();
    },
    postExpense: async function (payload) {
        const response = await fetch(EXPENSES_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    },
    getUserDetails: async function (authToken) {
        const bearerToken = 'Bearer ' + authToken
        const response = await fetch(USER_DETAILS_ENDPOINT, {
            headers: { 'Authentication': authToken }
        })

    }



}


