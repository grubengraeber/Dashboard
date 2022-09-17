import { Card, List, ListItemButton } from '@mui/material'
import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
};


const ExpenseNav = ({ onWeek, onMonth, onAdd }) => {

    const TIMESPAN_MONTH = 30;
    const TIMESPAN_WEEK = 7;
    // NEXT LINE UNUSED AND THEREFOR COMMENTED OUT BECAUSE OF CONSOLE WARNING
    // const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <Card>
            <List style={flexContainer}>
                <ListItemButton onClick={onWeek}>Month</ListItemButton>
                <ListItemButton onClick={onMonth}>7 days</ListItemButton>
                <ListItemButton onClick={onAdd}><AddBoxIcon /></ListItemButton>
            </List>
        </Card>
    )
}


export default ExpenseNav