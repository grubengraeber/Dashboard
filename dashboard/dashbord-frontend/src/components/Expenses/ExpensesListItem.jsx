import { ListItem, ListItemText } from '@mui/material'
import { Delete } from '@mui/icons-material'
import React, { useState } from 'react'


const ExpensesListItem = ({ data, onDelete }) => {
    const [expenseId, setExpenseId] = useState(data.id)

    //const mutation = useMutation((id) => endpoints.deleteExpense(id));
    const handleOnDelete = () => {
        onDelete(expenseId);
    }

    return (
        <ListItem dense divider style={{ height: '3em' }} >
            <ListItemText primary={data.name} secondary={data.category.name + " " + data.date} />
            <ListItemText primary={(Math.round(data.cost) + " €")} style={{ color: 'red', textAlign: 'right' }} />
            <Delete onClick={handleOnDelete} />
        </ListItem >
    )
}

export default ExpensesListItem