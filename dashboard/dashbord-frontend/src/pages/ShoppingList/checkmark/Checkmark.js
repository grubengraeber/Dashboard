import React from 'react'
import { Checkbox } from '@mui/material'
import axios from 'axios';


export const Checkmark = (props) => {

    function handleChange(changeEvent) {
        if (changeEvent.target.checked) {
            console.log("Checked Item: " + props.itemId)
            props.item.active = false;
            axios.put("http://localhost:8080/api/shopping-list/" + props.listId + "/entries/" + props.itemId, props.item)
        } else {
            console.log("Unchecked Item: " + props.itemId)
        }
    }

  return (
    <Checkbox onChange={handleChange} />
  )
}