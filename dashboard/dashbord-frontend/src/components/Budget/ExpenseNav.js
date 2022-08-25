import { List, ListItem, ListItemButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddExpenseForm from './AddExpenseFormDialog';

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
};


const ExpenseNav = ({ forceUpdate }) => {
    const TIMESPAN_MONTH = 30;
    const TIMESPAN_WEEK = 7;
    const [selectedDate, handleDateChange] = useState(new Date());
    const onMonth = (e) => { handleTimeSpanClick(e, TIMESPAN_MONTH) };
    const onWeek = (e) => { handleTimeSpanClick(e, TIMESPAN_WEEK) };
    const [showAddDialog, setShowAddDialog] = useState(false);


    const onAddExpense = (e) => {
        console.log("handle expenses")
        setShowAddDialog(true);
    }

    const onCloseExpense = () => {
        setShowAddDialog(false);
    }




    return (
        <>
            <List style={flexContainer}>
                <ListItemButton style={{ flow: 'auto' }} onClick={onWeek}>Month</ListItemButton>
                <ListItemButton onClick={onMonth}>7 days</ListItemButton>
                <ListItemButton onClick={onAddExpense}><AddBoxIcon /></ListItemButton>
            </List>
            <AddExpenseForm onNewExpense={forceUpdate} show={showAddDialog} onClose={onCloseExpense} />

        </>
    )
}




function handleTimeSpanClick(e, timeSpan) {
    alert("wooow");
}






export default ExpenseNav