import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { ErrorMessage } from '../../../components/Error/ErrorMessage'
import { SuccessMessage } from '../../../components/Success/SuccessMessage'


export const DeleteButton = (props) => {

  const [errorOpen, setErrorOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("An Error occured!")
  const [successOpen, setSuccessOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState("Deleting worked!")

    function deleteItem(clickEvent) {
        console.log("Pressed Delete-Button with id: " + props.itemId + " and the listId is: " + props.listId)
        const configuration = {
          headers: {"Access-Control-Allow-Origin": "*"}
        }
        // Delete HHTP REQUEST WITH ID: props.listId
        axios.delete("http://localhost:8080/api/shopping-list/" + props.listId + "/entries/" + props.itemId, configuration)
        .then(() => {
          alert('Item: "' + props.itemTitle + '" deleted.')
          setSuccessOpen(true)
          setSuccessMessage("Deleting item '" + props.itemTitle + "' was successful!")
    })
        .catch(function (error) {
          if(error.response) {
            setErrorOpen(true)
            setErrorMessage(error.message)
          }
        })
        // TODO throbber

    }

    

  return (
    <>
      <Button key={props.itemId} onClick={deleteItem} >Delete</Button>
      <ErrorMessage open={errorOpen} setOpen={setErrorOpen} errorMessage={errorMessage} />
      <SuccessMessage open={successOpen} setOpen={setSuccessOpen} successMessage={successMessage} />
    </>
  )
}

export default DeleteButton
