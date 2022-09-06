import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { endpoints } from '../../../Fetch/api/shoppingList/shoppingListListItems/endpoints'


export const AmountTextField = ({ propAmount, item, itemId, listId, 
    setIsError, setIsSuccess, setErrorMessage, setSuccessMessage, 
    setIsInformation, setInformationMessage }) => {
    const [amount, setAmount] = useState(propAmount)
    const [startAmount, setStartAmount] = useState(propAmount)

    function updateAmount(changeEvent) {
        if (changeEvent.target.value === "") {
            setAmount(startAmount)
            setIsError(true)
            setErrorMessage("The amount can't be empty!")
        } else if (changeEvent.target.value === "0") {
            setAmount(startAmount)
            setIsInformation(true)
            setInformationMessage("Because the amount can't be 0, it was updated to the original amount.")
        } else {
            const newAmount = parseInt(changeEvent.target.value)
            setAmount(newAmount)
            console.log("changed the amount to: " + changeEvent.target.value + ", item id= " + itemId)
            item.amount = parseInt(changeEvent.target.value)
            console.log(item)
            console.log(amount)
            endpoints.updateItemCustom(listId, itemId, item, setSuccessMessage, setIsSuccess, setIsError, setErrorMessage, setStartAmount, changeEvent.target.value)

        }
    }
  return (
    <>
        <TextField
            id="standard-number"
            label="Amount"
            type="number"
            value={amount}
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