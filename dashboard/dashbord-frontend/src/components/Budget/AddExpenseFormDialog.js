import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Grid, MenuItem, Select, TextField } from '@mui/material'
import { endpoints } from '../../Fetch/endpoints';
import { useQuery } from '@tanstack/react-query';
import useAddExpense from '../../hooks/useAddExpense';

const AddExpenseForm = ({ show, onClose }) => {

    const { data, isLoading, isError } = useQuery(["categories"], endpoints.getExpenseCategories);
    const [categories, setCategories] = useState();
    const [expenseValue, setExpenseValue] = useState("");
    const [expenseName, setExpenseName] = useState("");
    const [expenseCategory, setExpenseCategory] = useState();
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const handleAdd = function (e) {
        const payload = {
            name: expenseName,
            value: expenseValue,
            date: "25.08.2022",
            category: expenseCategory
        }
        const { isLoading, isError, isSuccess } = useAddExpense(payload)
        setShowError(isError);
        setShowLoading(isLoading);
        setShowSuccess(isSuccess);
    }

    const handleExpenseTextChange = (e) => {
        setExpenseName(e.target.value);
    }

    const handleValueTextChange = (e) => {
        setExpenseValue(e.target.value)
    }


    const handleCategorySelectChange = (e) => {
        setExpenseCategory(e.target.value);
    }

    if (isLoading) {

        return (<h2>loading...</h2>)
    } else {

        console.log(data);

        return (

            <Dialog open={show} onClose={onClose} title="Add expense">
                <DialogTitle>Add expense</DialogTitle>
                <DialogContent style={{ margin: "auto" }}>
                    <TextField label="expenses" onChange={handleExpenseTextChange} error={expenseName === ""} />
                    <TextField type="number" label="€" onChange={handleValueTextChange} />
                    <Select label="category" placeholder='Category' onChange={handleCategorySelectChange}>
                        {data.map((categoryName) => (<MenuItem key={categoryName} value={categoryName}>{categoryName}</MenuItem>))}
                    </Select>
                    <Button onClick={handleAdd} variant='contained'>add</Button>


                </DialogContent>
            </Dialog>


        )
    }
}


export default AddExpenseForm