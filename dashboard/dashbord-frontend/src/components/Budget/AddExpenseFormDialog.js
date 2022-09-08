import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Grid, MenuItem, Select, TextField } from '@mui/material'
import { endpoints } from '../../Fetch/reactQueryEndpoints';
import { useQuery, useMutation } from '@tanstack/react-query';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from '@mui/x-date-pickers';


const AddExpenseForm = ({ show, onClose, onNewExpense }) => {

    const { data, isLoading, isError } = useQuery(["categories"], endpoints.getExpenseCategories, { refetchOnWindowFocus: false });
    const [expenseValue, setExpenseValue] = useState("");
    const [expenseName, setExpenseName] = useState("");
    const [expenseCategory, setExpenseCategory] = useState("");
    const [dateValue, setDateValue] = useState(new Date());


    //mutution for post/put request using React-query
    const mutation = useMutation(payload => {
        return endpoints.postExpense(payload)
    })


    const handleAdd = (e) => {
        const payload = {
            name: expenseName,
            value: parseFloat(expenseValue),
            date: dateValue.toISOString().split("", 10).join(""),
            categoryName: expenseCategory
        };
        mutation.mutate(payload);
        onNewExpense();
        onClose()
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
    } else if (isError) {
        // NEXT LINE JUST FOR USING THE ISERROR VALUE TO GET RID OF CONSOLE WARNINGS
        console.log("Error in AddExpenseFormDialog.js!")
    } else {

        return (

            <Dialog open={show} onClose={onClose} title="Add expense" maxWidth="xs">
                <DialogTitle>Add expense</DialogTitle>
                <DialogContent
                    sx={{
                        padding: 1

                    }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} margin={1}>
                            <TextField label="expenses" onChange={handleExpenseTextChange} error={expenseName === ""} />
                        </Grid>
                        <Grid item xs={12} margin={1}>
                            <TextField type="number" label="€" onChange={handleValueTextChange} />
                        </Grid>
                        <Grid item xs={12} margin={1}>
                            <Select label="category" value={expenseCategory} onChange={handleCategorySelectChange}>
                                {data.map((categoryName) => (<MenuItem key={categoryName} value={categoryName}>{categoryName}</MenuItem>))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} margin={1}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Date"
                                    value={dateValue}
                                    onChange={(newValue) => {
                                        setDateValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12} margin={1}>
                            <Button onClick={handleAdd} variant='contained'>add</Button>
                        </Grid>
                    </Grid>

                </DialogContent>
            </Dialog >


        )
    }
}


export default AddExpenseForm

