import { FormControl, TextField, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { DeleteForever } from '@mui/icons-material'
import { TimePicker } from '@mui/x-date-pickers'
import axios from 'axios'


export const AddForm = (props) => {
    const [itemName, setItemName] = useState("")
    const [itemAmount, setItemAmount] = useState(0)

    function addItem(clickEvent) {
        console.log("Add Item to List with id: " + props.listId + 
                    ", and the amount of the item '" + itemName + "' is: " + itemAmount)

        // send Post request with JSON: { amount: amount ....}
        const requestBody = 
        {
            "id": null,
            "addedTime": TimePicker,
            "item": 
            {
                "id": null,
                "name": itemName
            },
            "amount": itemAmount
        }

        axios.post("http://localhost:8080/api/shopping-list/" + props.listId + "/entries", requestBody)
        .then(() => alert('Item: "' + itemName + '" added.'))
        
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
    <FormControl>
        <Grid container sx={{ padding: "5px"}} alignItems="center" >
            <Grid item xs={4}>
                <TextField 
                id="outlined-basic" 
                value={itemName}
                onChange={handleItemNameChange}
                label="Item Name" 
                variant="outlined" />
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
  )
}
