import { List, ListItem, ListItemButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
};


const ExpenseNav = () => {
    const TIMESPAN_MONTH = 30;
    const TIMESPAN_WEEK = 7;
    const [selectedDate, handleDateChange] = useState(new Date());
    const onMonth = (e) => { handleTimeSpanClick(e, TIMESPAN_MONTH) };
    const onWeek = (e) => { handleTimeSpanClick(e, TIMESPAN_WEEK) };


    return (
        <List style={flexContainer}>
            <ListItemButton style={{ flow: 'auto' }} onClick={onWeek}>Month</ListItemButton>
            <ListItemButton onClick={onMonth}>7 days</ListItemButton>
            <ListItemButton onClick={handleAddExpense}><AddBoxIcon /></ListItemButton>
        </List>
    )
}




function handleTimeSpanClick(e, timeSpan) {
    alert("wooow");
}

function handleAddExpense(e) {
    alert("Addexpenses");
}





export default ExpenseNav