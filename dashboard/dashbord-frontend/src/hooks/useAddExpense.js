import { useMutation } from '@tanstack/react-query'
import { endpoints } from '../Fetch/endpoints'

function useAddExpense(expenseData) {


    const { isSuccess, isLoading, isError } = useMutation(() => addExpense(expenseData))

    const addExpense = async (expenseData) => {
        endpoints.postExpense(expenseData)
    }

    return { isSuccess, isLoading, isError }

}



export default useAddExpense

