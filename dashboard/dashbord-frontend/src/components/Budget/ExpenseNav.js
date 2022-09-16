import { List, ListItemButton } from '@mui/material'
import React, { useState, useContext } from 'react'
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
    // NEXT LINE UNUSED AND THEREFOR COMMENTED OUT BECAUSE OF CONSOLE WARNING
    // const [selectedDate, handleDateChange] = useState(new Date());
    const onMonth = (e) => { handleTimeSpanClick(e, TIMESPAN_MONTH) };
    const onWeek = (e) => { handleTimeSpanClick(e, TIMESPAN_WEEK) };
    const [showAddDialog, setShowAddDialog] = useState(false);


    const onAddExpense = (e) => {
        setShowAddDialog(true);
    }

    const onCloseExpense = () => {
        setShowAddDialog(false);
    }

    console.log("rendered expenses nav")



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
    // NEXT LINES USED FOR GETTING RID OF CONSOLE WARNINGS

}






export default ExpenseNav