import React from 'react'
import { List, Card } from '@mui/material';
import ExpensesListItem from './ExpensesListItem';

const ExpensesList = ({ data, listItemsCreator }) => {

    return (
        <Card>
            <List dense>
                {/* {data.map((expense) => <ExpensesListItem key={expense.id} data={expense} />)} */}
                {listItemsCreator()}
            </List>
        </Card>
    )
}

export default ExpensesList