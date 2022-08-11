import { ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'
import React from 'react'

const ExpensesListItem = ({ data }) => {
    return (
        <ListItem dense divider style={{ width: '600px', height: '3em' }}>
            <ListItemText key={data.id} primary={data.name} secondary={data.category.name} />
            <ListItemSecondaryAction prefix='wow' />
            <ListItemText primary={Math.floor(data.cost)} style={{ color: 'red', textAlign: 'right' }} />
        </ListItem>
    )
}

export default ExpensesListItem