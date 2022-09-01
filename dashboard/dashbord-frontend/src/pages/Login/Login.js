import { Button, Card, Grid } from '@mui/material'
import React from 'react'

function Login(props) {
  return (
    <>
        <Grid container
        alignItems={"center"}
        justifyContent={"center"}
        >
            
            <Grid item xs={6}>
            <Card>
                <Grid container spacing={2} padding={"10px"}>
                    <Grid item xs={12} margin={"5px"} display={"flex"} border={"1px solid black"} alignItems={"center"} justifyContent={"center"}>
                        Textfield email or username
                    </Grid>
                    <Grid item xs={12} margin={"5px"} display={"flex"} border={"1px solid black"} alignItems={"center"} justifyContent={"center"}>
                        Textfield password
                    </Grid>
                    <Grid item xs={12} margin={"5px"} display={"flex"} border={"1px solid black"} alignItems={"center"} justifyContent={"center"}>
                        <Button>Sign in</Button>
                    </Grid>
                </Grid>
            </Card>
            </Grid>
        </Grid>
    </>
  )
}

export default Login