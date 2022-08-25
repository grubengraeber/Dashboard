import { FormControl, TextField, Button, Grid, Autocomplete } from '@mui/material'
import React, { useState } from 'react'
import { DeleteForever } from '@mui/icons-material'
import axios from 'axios'
import { ErrorMessage } from '../../../components/Error/ErrorMessage'
import { SuccessMessage } from '../../../components/Success/SuccessMessage'


export const AddForm = (props) => {
    const [itemName, setItemName] = useState("")
    const [itemAmount, setItemAmount] = useState(0)
    const [isError, setIsError] = useState(false)
    const [errorText, setErrorText] = useState("An Error occured!")
    const [isSuccess, setIsSuccess] = useState(false)
    const [successText, setSuccessText] = useState("Success!")
    const [items, setItems] = useState([])


    axios.get("http://localhost:8080/api/shopping-list/items")
    .then((response) => {
        setItems(response.data)
    })
    .catch((error) => {
        if (error.response)  {
            setIsError(true)
            setErrorText(error.message)
        }
    })

    function addItem(clickEvent) {
        const requestBody = 
        {
            "name": itemName,
            "amount": itemAmount
        }

        const headers = {"Access-Control-Allow-Origin": "*"}
            

        axios.post("http://localhost:8080/api/shopping-list/" + props.listId + "/entries", requestBody, headers)
        .then(() => {
            setIsSuccess(true)
            setSuccessText("Adding item: '" + itemName + "' was successful!")
        })
        .catch((error) => {
            setIsError(true)
            setErrorText(error.message)
        })
    }

    function disregardForm(clickEvent) {
        props.onChange(false)
    }

    function handleItemNameChange(changeEvent) {
        setItemName(changeEvent.target.value)
    }

    function handleItemAmountChange(changeEvent) {
        setItemAmount(changeEvent.target.value)
    }

  return (
    <>
    <FormControl>
        <Grid container sx={{ padding: "5px"}} alignItems="center" >
            <Grid item xs={4}>
                <Autocomplete
                    freeSolo
                    options={items.map((option) => option.name)}
                    renderInput={(params) => <TextField {...params} 
                                                label="Item Name" 
                                                variant='outlined'
                                                onChange={handleItemNameChange}
                                                value={itemName}
                                                />}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-number"
                    label="Amount"
                    value={itemAmount}
                    onChange={handleItemAmountChange}
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                />
            </Grid>
                <Grid item xs={3} alignItems="center" >
                <Button onClick={addItem} >Add new Item</Button>
            </Grid>
            <Grid item xs={1} >
                <DeleteForever onClick={disregardForm} />
            </Grid>
        </Grid>
    </FormControl>
    <ErrorMessage open={isError} setOpen={setIsError} errorMessage={errorText} />
    <SuccessMessage open={isSuccess} setOpen={setIsSuccess} successMessage={successText} />
    </>
  )
}
