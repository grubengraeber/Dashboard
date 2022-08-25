import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import { SuccessMessage } from '../../../components/Success/SuccessMessage';
import { ErrorMessage } from '../../../components/Error/ErrorMessage';


export const TitleWithOnclickTextfield = (props) => {

    const [textField, setTextField] = useState(false);
    const [newItemName, setNewItemName] = useState(props.itemName)
    const [startName, setStartName] = useState(props.itemName)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("An Error occurred!")
    const [isSuccess, setIsSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("It was successful!")

    function toggleTextField(clickAndSubmitEvent) {
        if (textField) {
            if (clickAndSubmitEvent.target.value === "") {
                setNewItemName(startName)
            } else {
                setNewItemName(clickAndSubmitEvent.target.value)
            }
            props.item.item.name = newItemName
            const headers = {
                headers: {"Access-Control-Allow-Origin": "*"}
              }
            axios.put("http://localhost:8080/api/shopping-list/" + props.listId + "/entries/" + props.itemId, props.item, headers)
            .then(textField ? setTextField(false) : setTextField(true))
            .then(
                setIsSuccess(true)
            )
            .then(setSuccessMessage("Changing name to: '" + newItemName + "' was successful!" ))
            .catch((error) => {
                if(error.response) {
                  setIsError(true)
                  setErrorMessage(error.message)
                }
              })
        } else {
            textField ? setTextField(false) : setTextField(true)
        }
    }

    const keyDownHandler = event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          toggleTextField(event);
        }
    };

    function updateItemName(changeEvent) {
        if (changeEvent.target.value === "") {
            setNewItemName(changeEvent.target.value)
        } else {
            setNewItemName(changeEvent.target.value)
        }
    }

    const textFieldAndHeader = [
        <TextField id="outlined-basic" key={props.itemName} value={newItemName} onBlur={toggleTextField} onKeyDown={keyDownHandler} onChange={updateItemName} 
        label="New Item Name" variant="outlined" />, 
        <h5 key={props.itemName} onClick={toggleTextField}>{props.itemName}</h5>
    ]

  return (
    <>
        <Box>
            { textField ? textFieldAndHeader[0] : textFieldAndHeader[1]}
        </Box>
        <SuccessMessage open={isSuccess} setOpen={setIsSuccess} successMessage={successMessage} />
        <ErrorMessage open={isError} setOpen={setIsError} errorMessage={errorMessage} />
    </>
  )
}