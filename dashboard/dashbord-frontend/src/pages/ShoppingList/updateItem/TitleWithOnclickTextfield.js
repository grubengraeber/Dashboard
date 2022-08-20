import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'


export const TitleWithOnclickTextfield = (props) => {

    const [textField, setTextField] = useState(false);

    function toggleTextField(clickAndSubmitEvent) {
        if (textField) {
            console.log("This is ready to be submitted: " 
            + clickAndSubmitEvent.target.value + ", and the item id is: " + props.itemId)
        }
        textField ? setTextField(false) : setTextField(true)
    }

    const keyDownHandler = event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          toggleTextField(event);
        }
    };

    function updateItemName(changeEvent) {
        if (changeEvent.target.value === "") {
            console.log("New Item Name is empty!")
        } else {
        console.log("This is the new name of the List Item: " + changeEvent.target.value)
        }
    }

    const textFieldAndHeader = [
        <TextField id="outlined-basic" key={props.itemId} value={props.itemName} onBlur={toggleTextField} onKeyDown={keyDownHandler} onChange={updateItemName} 
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