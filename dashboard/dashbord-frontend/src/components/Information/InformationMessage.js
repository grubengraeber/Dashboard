import React from 'react'
import { Snackbar, Alert } from '@mui/material'



export const InformationMessage = ({ open, setOpen, informationMessage}) => {

    function handleClose(closeEvent) {
        setOpen(false)
      }
    
      return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    {informationMessage}
                </Alert>
            </Snackbar>
        </>
      )
}
