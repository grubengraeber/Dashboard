const EXPENSES_ENDPOINT = "http://localhost:8080/api/v1/budget/expenses"; 
const CHARTDATA_ENDPOINT = "http://localhost:8080/api/v1/budget/expenses/chart"; 

export const endpoints = {

    getExpenses: async function() {
        const respone = await fetch(EXPENSES_ENDPOINT);
        return respone.json();
    }, 
    getChartData: async function() {
        const respone = await fetch(CHARTDATA_ENDPOINT);
        return respone.json();
    }


}


