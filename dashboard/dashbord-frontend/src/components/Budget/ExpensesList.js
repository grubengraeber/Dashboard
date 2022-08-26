import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import { endpoints } from '../../Fetch/endpoints';
import ExpensesListItem from '../../components/Budget/ExpensesListItem';
import { List } from '@mui/material';
import StatePlayingAround from '../StatePlayingAround';

const ExpensesList = () => {
    const { data, isLoading, error, isError, refetch } = useQuery(["expenses"], endpoints.getExpenses, { refetchOnMount: "always" });

    useEffect(() => {
        async function refetchData() {
            refetch();
        }
        refetchData();
        console.log("expense List refetch after mount")
    })



    if (isLoading) {
        return (<><h1>Is loading...</h1></>)
    }





    return (
        <List dense>
            <StatePlayingAround />
            {data.map((expense) => <ExpensesListItem key={expense.id} data={expense} />)}
        </List>
    )
}

export default ExpensesList