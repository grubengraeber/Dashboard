import React, { useReducer } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Grid, MenuItem, Select, TextField } from '@mui/material'
import { endpoints } from '../../Fetch/reactQueryEndpoints';
import { useQuery } from '@tanstack/react-query';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from '@mui/x-date-pickers';
import useAuth from '../../hooks/useAuth';


const AddExpenseForm = ({ show, onClose, onNewExpense }) => {
    const { data: categories, isFetched } = useQuery(["categories"],
        () => endpoints.getExpenseCategories(auth),
        { refetchOnWindowFocus: false });


    const initialExpense = {
        name: "",
        value: "",
        categoryName: "",
        date: new Date().toISOString().split("", 10).join("")
    }

    const auth = useAuth();
    const [state, dispatch] = useReducer((curVal, newVal) => ({ ...curVal, ...newVal }), initialExpense)


    if (isFetched) {
        const handleFormChange = (e) => {
            //when the date has changed, e.target is null
            const { name, value } = e.target;
            dispatch({ [name]: value })
        }
        const handleOnAdd = () => {
            onNewExpense(state);
        }

        const handleDateChange = (dateValue) => {
            const expenseDate = dateValue.toISOString().split("", 10).join("")
            dispatch({ "date": expenseDate });
        }



        return (

            <Dialog open={show} onClose={onClose} title="Add expense" maxWidth="xs">
                <DialogTitle>Add expense</DialogTitle>
                <DialogContent
                    sx={{
                        padding: 1

                    }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} margin={1}>
                            <TextField label="expenses" name="name" onChange={handleFormChange} error={state.name === ""} />
                        </Grid>
                        <Grid item xs={12} margin={1}>
                            <TextField type="number" name="value" label="€" onChange={handleFormChange} />
                        </Grid>
                        <Grid item xs={12} margin={1}>
                            <Select label="category" name="categoryName" placeholder='Category' value={state.categoryName} onChange={handleFormChange}>
                                {categories.map((category) => (<MenuItem key={category} value={category}>{category}</MenuItem>))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} margin={1}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Date"
                                    value={state.date}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12} margin={1}>
                            <Button onClick={handleOnAdd} variant='contained'>add</Button>
                        </Grid>
                    </Grid>

                </DialogContent>
            </Dialog >


        )

    }
}


export default AddExpenseForm

