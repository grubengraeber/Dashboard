import React from 'react'
import { Snackbar, Alert } from '@mui/material'


export const SuccessMessage = (props) => {

  function handleClose(closeEvent) {
    props.setOpen(false)
  }

  return (
    <>
        <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {props.successMessage}
            </Alert>
        </Snackbar>
    </>
  )
}
