const EXPENSES_ENDPOINT = "http://localhost:8080/api/v1/budget/expenses"; 


export const endpoints = {

    getExpenses: async function() {
        const respone = await fetch(EXPENSES_ENDPOINT);
        return respone.json();
    }


}


