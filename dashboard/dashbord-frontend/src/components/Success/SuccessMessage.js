import React from 'react'
import { Snackbar, Alert } from '@mui/material'


export const SuccessMessage = ({successMessage, setOpen, open}) => {

  function handleClose(closeEvent) {
    setOpen(false)
  }

  return (
    <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {successMessage}
            </Alert>
        </Snackbar>
    </>
  )
}
