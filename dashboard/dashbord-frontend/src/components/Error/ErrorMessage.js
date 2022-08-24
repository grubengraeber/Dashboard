import React from 'react'
import { Snackbar, Alert } from '@mui/material'



export const ErrorMessage = (props) => {

  function handleClose(closeEvent) {
    props.setOpen(false)
  }

  return (
    <>
        <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {props.errorMessage}
            </Alert>
        </Snackbar>
    </>
  )
}
