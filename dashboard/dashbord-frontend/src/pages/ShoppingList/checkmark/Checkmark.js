import React from 'react'
import { Checkbox } from '@mui/material'
import { endpoints } from '../../../Fetch/api/shoppingList/shoppingListListItems/endpoints';
import useAuth from "../../../hooks/useAuth"


export const Checkmark = ({ item, itemId, listId }) => {

    const { auth } = useAuth();
    const accessToken = auth.accessToken;

    function handleChange(changeEvent) {
        if (changeEvent.target.checked) {
            item.active = false;
        } else {
            item.active = true;
        }
        endpoints.updateItem(listId, itemId, item, accessToken)
    }

  return (
    <Checkbox checked={!item.active} onChange={handleChange} />
  )
}