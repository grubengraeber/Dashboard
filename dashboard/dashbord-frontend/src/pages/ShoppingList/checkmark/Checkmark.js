import React from 'react'
import { Checkbox } from '@mui/material'


export const Checkmark = (props) => {

    function handleChange(changeEvent) {
        if (changeEvent.target.checked) {
            console.log("Checked Item: " + props.itemId)
        } else {
            console.log("Unchecked Item: " + props.itemId)
        }
        console.log("Item with Item ID: " + props.itemId + " Is: " + changeEvent.target.value)
    }

  return (
    <Checkbox onChange={handleChange} />
  )
}