import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { endpoints } from '../../Fetch/endpoints';
import ExpensesListItem from '../../components/Budget/ExpensesListItem';
import { List } from '@mui/material';
import StatePlayingAround from '../StatePlayingAround';

const ExpensesList = () => {
    const { data, isLoading, error, isError } = useQuery(["expenses"], endpoints.getExpenses);

    return (
        <List dense>
            <StatePlayingAround />
            {data.map((expense) => <ExpensesListItem key={expense.id} data={expense} />)}
        </List>
    )
}

export default ExpensesList