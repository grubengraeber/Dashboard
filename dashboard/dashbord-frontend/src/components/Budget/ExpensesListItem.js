import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'


const ExpensesListItem = ({ data }) => {
    return (
        <ListItem dense divider style={{ width: '600px', height: '3em' }}>
            <ListItemText primary={data.name} secondary={data.category.name + " " + data.date} />
            <ListItemText primary={(Math.round(data.cost) + " €")} style={{ color: 'red', textAlign: 'right' }} />
            <ListItemIcon />
        </ListItem>
    )
}

export default ExpensesListItem