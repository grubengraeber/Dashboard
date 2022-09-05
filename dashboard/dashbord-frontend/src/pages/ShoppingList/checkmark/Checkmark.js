import React from 'react'
import { Checkbox } from '@mui/material'
import { endpoints } from '../../../Fetch/api/shoppingList/shoppingListListItems/endpoints';


export const Checkmark = ({ item, itemId, listId }) => {

    function handleChange(changeEvent) {
        if (changeEvent.target.checked) {
            item.active = false;
        } else {
            item.active = true;
        }
        endpoints.updateItem(listId, itemId, item)
    }

  return (
    <Checkbox checked={!item.active} onChange={handleChange} />
  )
}