import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { endpoints } from '../Fetch/endpoints'

const useAddExpense = (expenseData) => {


    const { isSuccess, isLoading, isError } = useMutation(() => addExpense(expenseData))

    const addExpense = async (expenseData) => {
        endpoints.postExpense(expenseData)
    }

    return { isSuccess, isLoading, isError }

}



export default useAddExpense

