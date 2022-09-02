import React, { useEffect, useState } from 'react';
import { Grid, Stack } from "@mui/material"
import LoginForm from './LoginForm'
import SignInWith from './SignInWIth/SignInWith'
import { SuccessMessage } from "../../components/Success/SuccessMessage"
import { ErrorMessage } from "../../components/Error/ErrorMessage"

function Login({isErrorFromOutside, 
                errorMessageFromOutside, 
                isSuccessFromOutside, 
                successMessageFromOutside
            }) {
    const [loginData, setLoginData] = useState(null)
    const [isSuccess, setIsSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("Success")
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("Error")

    if (isErrorFromOutside) {
        setIsError(true);
        setErrorMessage(errorMessageFromOutside)
    }
    if (isSuccessFromOutside) {
        setIsSuccess(true);
        setSuccessMessage(successMessageFromOutside)
    }


    useEffect(() => {
        if(loginData) {
            console.log(loginData)
            //TODO use Data for login process
            // post
            //ERROR:
            // - set isErrror true 
            // - errorMessage to custom errortext
            // SUCCESS:
            // - set is success true 
            // - SuccessMessage to custom successtext
            // - redirect to '/login' route
            
          }
    }, [loginData])

  return (
    <>
    {isError ? <ErrorMessage open={isError} setOpen={setIsError} errorMessage={errorMessage} /> : null}
    {isSuccess ? <SuccessMessage open={isSuccess} setOpen={setIsSuccess} successMessage={successMessage}/> :
        <Stack direction="row" spacing={2} >
            <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={4}>
                    <LoginForm setLoginData={setLoginData}/>
                </Grid>
                <Grid item xs={4}>
                    <SignInWith />
                </Grid>
            </Grid>
        </Stack>
    }
    </>
  )
}

export default Login