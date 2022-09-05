import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import { endpoints } from '../../../Fetch/api/shoppingList/shoppingListListItems/endpoints';


export const TitleWithOnclickTextfield = ({ item, itemName, 
    listId, itemId, itemUnchecked, setIsError, setIsSuccess,
    setErrorMessage, setSuccessMessage }) => {

    const [textField, setTextField] = useState(false);
    const [newItemName, setNewItemName] = useState(itemName)
    const [startName, setStartName] = useState(itemName)

    function toggleTextField(clickAndSubmitEvent) {
        if (textField) {
            if (clickAndSubmitEvent.target.value === "") {
                setNewItemName(startName)
            } else {
                setNewItemName(clickAndSubmitEvent.target.value)
            }
            item.item.name = newItemName
            endpoints.updateItemCustomName(listId, itemId, item, 
                textField, setIsSuccess, setStartName, newItemName, 
                setSuccessMessage, setIsError, setErrorMessage, 
                setTextField)
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
        <TextField id="outlined-basic" key={itemName} value={newItemName} onBlur={toggleTextField} onKeyDown={keyDownHandler} onChange={updateItemName} 
        label="New Item Name" variant="outlined" />, 
        <h5 key={itemName} onClick={toggleTextField} style={{ textDecoration : itemUnchecked ? 'none' : 'line-through'}}>{itemName}</h5>
    ]

  return (
    <>
        <Box>
            { textField ? textFieldAndHeader[0] : textFieldAndHeader[1]}
        </Box>
    </>
  )
}