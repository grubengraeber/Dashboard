import { Button } from '@mui/material'
import React from 'react'
import { endpoints } from '../../../Fetch/api/shoppingList/shoppingListListItems/endpoints'


export const DeleteButton = ({ listId, itemId, itemTitle, 
  setIsError, setIsSuccess, setSuccessMessage, setErrorMessage }) => {

    function deleteItem(clickEvent) {
      endpoints.deleteItem(listId, itemId, setIsSuccess, setSuccessMessage, itemTitle, setIsError, setErrorMessage)
    }

    

  return (
    <>
      <Button key={itemId} onClick={deleteItem} >Delete</Button>
    </>
  )
}

export default DeleteButton
