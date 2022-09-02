import React from 'react'
import { Snackbar, Alert } from '@mui/material'



export const ErrorMessage = ({ errorMessage, open, setOpen }) => {

  function handleClose(closeEvent) {
    setOpen(false)
  }

  return (
    <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {errorMessage}
            </Alert>
        </Snackbar>
    </>
  )
}
