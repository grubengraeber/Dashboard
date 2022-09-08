import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import { endpoints } from '../../Fetch/reactQueryEndpoints';
import { List } from '@mui/material';
import StatePlayingAround from '../StatePlayingAround';
import { Delete } from '@mui/icons-material';
import ExpensesListItem from './ExpensesListItem';


const ExpensesList = () => {
    const { data, isLoading, error, isError, refetch } = useQuery(["expenses"], endpoints.getExpenses, { refetchOnMount: "always", refetchOnWindowFocus: false });

    useEffect(() => {
        async function refetchData() {
            refetch();
        }
        refetchData();
    })



    if (isLoading) {
        return (<><h1>Is loading...</h1></>)
    } else if (isError) {
        // NEXT LINES ARE JUST FOR USING ERROR AND ISERROR VALUES 
        // TO GET RID OF CONSOLE WARNINGS
        console.log("Error in ExpenseList.js!")
        console.log(error)
    }





    return (
        <List dense>
            <StatePlayingAround />
            {data.map((expense) => <ExpensesListItem key={expense.id} data={expense} />)}
        </List>
    )
}

export default ExpensesList