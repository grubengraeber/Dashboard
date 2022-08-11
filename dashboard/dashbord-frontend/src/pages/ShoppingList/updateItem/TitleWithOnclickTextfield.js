import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'


export const TitleWithOnclickTextfield = (props) => {

    const [textField, setTextField] = useState(false);

    function toggleTextField(clickAndSubmitEvent) {
        textField ? setTextField(false) : setTextField(true)
    }

    function updateItemName(changeEvent) {
        if (changeEvent.target.value === "") {
            console.log("New Item Name is empty!")
        } else {
        console.log("This is the new name of the List Item: " + changeEvent.target.value)
        }
    }

    const textFieldAndHeader = [
        <TextField id="outlined-basic" value={props.itemName} onBlur={toggleTextField} onChange={updateItemName} 
        label="New Item Name" variant="outlined" />, 
        <h5 onClick={toggleTextField}>{props.itemName}</h5>
    ]

  return (
    <>
        <Box>
            { textField ? textFieldAndHeader[0] : textFieldAndHeader[1]}
        </Box>
    </>
  )
}