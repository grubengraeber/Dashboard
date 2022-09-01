import { Button, Grid, TextField, Link, Stack, Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
 


function Registration() {
  return (
    <>
        <Grid container 
                display={"flex"} 
                alignItems={"center"}
                justifyContent={"center"}
                spacing={2}
                margin={"10px"}
                >
            <Stack
                component="form"
                
                spacing={2}
                noValidate
                autoComplete="off"
                >
                <Stack direction={"row"} spacing={2}>
                    <TextField label="First Name" required type={"text"}/>
                    <TextField label="Last Name" required type={"text"}/>
                </Stack>
                <TextField label="Email Address" fullWidth required type={"email"}/>
                {/* <TextField label="Username" required type={"text"}/> */}
                <TextField label="Password" required type={"password"}/>
                <FormControlLabel control={<Checkbox  />} label={"Remember me"}/>
                <Button variant="contained">sign up</Button>
                <Link href={"#"}>Already have an account? Sign in</Link>
            </Stack>
        </Grid>
    </>
  )
}

export default Registration