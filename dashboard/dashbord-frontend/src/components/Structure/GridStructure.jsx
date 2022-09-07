import { Grid } from '@mui/material'
import React from 'react'


export const GridStructure = ({ children }) => {
  return (
    <>
        <Grid container 
                  display={"flex"} 
                  alignItems={"center"}
                  justifyContent={"center"}
                  spacing={2}
                  margin={"10px"}
                  >
              {children}
          </Grid>
    </>
  )
}
