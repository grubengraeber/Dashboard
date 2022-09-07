import { Paper } from '@mui/material'
import React from 'react'


export const PaperStructure = ({ children }) => {
  return (
   <>
        <Paper 
        sx={{
          margin: "20px", 
          padding: "10px", 
          alignItems: "center",
          justifyContent: "center",
        }}>
          {children}
        </Paper> 
   </>
  )
}
