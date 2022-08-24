import React, { useEffect, useState } from 'react'
import { Dialog, Select, TextField } from '@mui/material'
import { endpoints } from '../../Fetch/endpoints';
import { useQuery } from '@tanstack/react-query';



const AddExpenseForm = ({ show, onClose }) => {

    const { data, isLoading, isError } = useQuery(["categories"], endpoints.getExpenseCategories);
    const [categories, setCategories] = useState();

    if (isLoading) {
        return (<h2>loading...</h2>)
    } else {

        console.log(data);

        return (
            <Dialog open={show} onClose={onClose} title="Add expense">

                <TextField label="expenses" />
                <TextField label="value" />
                <Select label="category" >
                </Select>


            </Dialog>


        )
    }
}

export default AddExpenseForm