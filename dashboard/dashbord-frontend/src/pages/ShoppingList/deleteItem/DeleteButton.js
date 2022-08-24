import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'


export const DeleteButton = (props) => {
    function deleteItem(clickEvent) {
        console.log("Pressed Delete-Button with id: " + props.itemId + " and the listId is: " + props.listId)
        // Delete HHTP REQUEST WITH ID: props.listId
        axios.delete("http://localhost:8080/api/shopping-list/" + props.listId + "/entries/" + props.itemId)
        .then(() => alert('Item: "' + props.itemTitle + '" deleted.'))
        // throbber
        // Alert mit "Item mit titel... gelöscht"
    }

  return (
    <Button key={props.itemId} onClick={deleteItem} >Delete</Button>
  )
}

export default DeleteButton
