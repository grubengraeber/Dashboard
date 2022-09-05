import { Paper, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

import GoogleButton from 'react-google-button'

function SignInWith() {


  return (
    <>
        <Paper elevation={3}
        sx={{margin: "20px", 
        padding: "10px", 
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
        }}>
            <Stack direction={"column"}>
            <Typography variant='h6'>Sign in with other accounts</Typography>
            <Divider />
            <GoogleButton style={{ margin: "10px" }} onClick={() => {console.log("clicked sign in with google button")}} /> 
            { /* TODO sign in with facebook ...*/ } 
            </Stack>
        </Paper>
    </>
  )
}

export default SignInWith