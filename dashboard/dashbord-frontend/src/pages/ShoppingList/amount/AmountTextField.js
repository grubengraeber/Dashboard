import React, { useState } from 'react'
import { TextField } from '@mui/material'
import axios from 'axios'
import { SuccessMessage } from '../../../components/Success/SuccessMessage'
import { InformationMessage } from '../../../components/Information/InformationMessage'
import { ErrorMessage } from '../../../components/Error/ErrorMessage'


export const AmountTextField = (props) => {
    const [amount, setAmount] = useState(props.amount)
    const [startAmount, setStartAmount] = useState(props.amount)
    const [isInformation, setIsInformation] = useState(false)
    const [informationMessage, setInformationMessage] = useState("This is an Information!")
    const [isSuccess, setIsSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("It was successful!")
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("This is an Error!")



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
            console.log("changed the amount to: " + changeEvent.target.value + ", item id= " + props.itemId)
            props.item.amount = parseInt(changeEvent.target.value)
            console.log(props.item)
            console.log(amount)
            const headers = {"Access-Control-Allow-Origin": "*"}
            axios.put("http://localhost:8080/api/shopping-list/" + props.listId + "/entries/" + props.itemId, props.item, headers)
            .then(
                setIsSuccess(true),
                setSuccessMessage("Changing the amount of item: '" + props.item.item.name + "' to: " + changeEvent.target.value + ", worked!")
            )
            .catch((error) => {
                if(error.response) {
                    setIsError(true)
                    setErrorMessage(error.message)
                }
            })

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
        <SuccessMessage open={isSuccess} setOpen={setIsSuccess} successMessage={successMessage} />
        <InformationMessage open={isInformation} setOpen={setIsInformation} informationMessage={informationMessage} />
        <ErrorMessage open={isError} setOpen={setIsError} errorMessage={errorMessage} />
    </>
  )
}