import { Button } from '@mui/material'
import React from 'react'
import { endpoints } from '../../../Fetch/api/shoppingList/shoppingListListItems/endpoints'
import useAuth from "../../../hooks/useAuth"


export const DeleteButton = ({ listId, itemId, itemTitle, 
  setIsError, setIsSuccess, setSuccessMessage, setErrorMessage }) => {

    const { auth } = useAuth();
    const accessToken = auth.accessToken;

    function deleteItem(clickEvent) {
      endpoints.deleteItem(listId, itemId, setIsSuccess, setSuccessMessage, itemTitle, setIsError, setErrorMessage, accessToken)
    }

    

  return (
    <>
      <Button key={itemId} onClick={deleteItem} >Delete</Button>
    </>
  )
}

export default DeleteButton
