import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Delete } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import { endpoints } from '../../Fetch/reactQueryEndpoints';
import { ExpenseContext } from '../../pages/BudgetTracker/BudgetSite';

const ExpensesListItem = ({ data }) => {
    const { forceUpdate } = useContext(ExpenseContext);
    const [expenseId, setExpenseId] = useState(data.id)
    const [isMouseOver, setIsMouseOver] = useState(false);

    const mutation = useMutation((id) => endpoints.deleteExpense(id));

    const handleOnClickDelete = () => {
        forceUpdate();
        mutation.mutate(expenseId)
    }
    //performance issues!!!

    return (
        <ListItem dense divider style={{ width: '600px', height: '3em' }} >
            <ListItemText primary={data.name} secondary={data.category.name + " " + data.date} />
            <ListItemText primary={(Math.round(data.cost) + " €")} style={{ color: 'red', textAlign: 'right' }} />
            <Delete onClick={handleOnClickDelete} />
        </ListItem >
    )
}

export default ExpensesListItem