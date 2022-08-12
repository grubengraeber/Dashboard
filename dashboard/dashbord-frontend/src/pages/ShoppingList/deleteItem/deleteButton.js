import { Button } from '@mui/material'
import React from 'react'


export const DeleteButton = (props) => {
    function deleteItem(clickEvent) {
        console.log("Pressed Delete-Button with id: " + props.itemId)
    }

  return (
    <Button key={props.itemId} onClick={deleteItem} >Delete</Button>
  )
}