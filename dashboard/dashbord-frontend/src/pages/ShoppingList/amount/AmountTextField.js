import React from 'react'
import { TextField } from '@mui/material'


export const AmountTextField = (props) => {
    function updateAmount(changeEvent) {
        if (changeEvent.target.value === "") {
            console.log("The Input fields Number is empty!")
        } else if (changeEvent.target.value === "0") {
            console.log("Item with itemId: " + props.itemId + " has to be deleted")
        } else {
        console.log("changed the amount to: " + changeEvent.target.value + 
        ", item id= " + props.itemId + "\nTODO create Put request with itemid and new amount")
        }
    }
  return (
    <>
        <TextField
            id="standard-number"
            label="Amount"
            type="number"
            value={props.amount}
            InputProps={{ inputProps: { min: 0} }}
            size="small"
            onChange={updateAmount}
            InputLabelProps={{
                shrink: true,
            }}
            variant="standard"
        />
    </>
  )
}
