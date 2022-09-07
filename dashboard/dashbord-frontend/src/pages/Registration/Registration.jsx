import React, { useEffect, useState } from 'react';
import RegistrationForm from './RegistrationForm'
import { SuccessMessage } from "../../components/Success/SuccessMessage"
import { ErrorMessage } from "../../components/Error/ErrorMessage"
import { endpoints } from '../../Fetch/api/registration/endpoints';
import { Link, Typography } from '@mui/material';

function Registration({ isErrorFromOutside, 
                        errorMessageFromOutside, 
                        isSuccessFromOutside, 
                        successMessageFromOutside
                      }) {

  const [registrationData, setRegistrationData] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState("Success!")
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("Error!")
  const [wasSuccess, setWasSuccess] = useState(false)

  if (isErrorFromOutside) {
    setIsError(true);
    setErrorMessage(errorMessageFromOutside)
  }
  if (isSuccessFromOutside) {
    setIsSuccess(true);
    setSuccessMessage(successMessageFromOutside)
  }

    useEffect(() => {
      
      function onSuccess() {
        setIsSuccess(true)
        setWasSuccess(true)
      }

      function onError() {
        setIsError(true)
      }

      if(registrationData) {
        // post
        async function getServerResponse() {
          const response = await endpoints.postRegistration(
            registrationData, 
            onSuccess, 
            onError, 
            setSuccessMessage,
            setErrorMessage)
            .then(
            isError ? console.log(this) : console.log("ERROR")
            )
            return response;
        }
        const response = getServerResponse();
        console.log("SERVER RESPONSE IS FOLLOWING: ");
        console.log(response);
        //ERROR:
        // - set iserrror true 
        // - errorMessage to custom errortext
        // SUCCESS:
        // - set is success true 
        // - successMessgae to custom successtext
        // - redirect to '/login' route
        
      }
    }, [registrationData])



  return (
    <>
    {isError ? <ErrorMessage open={isError} setOpen={setIsError} errorMessage={errorMessage} /> : null}
    <SuccessMessage open={isSuccess} setOpen={setIsSuccess} successMessage={successMessage}/>
    {wasSuccess ? 
    <><Typography>Signing up was successful! You can sign in now.</Typography> 
    <Link href='/login'>Sign in</Link> </>:
    <RegistrationForm setRegistrationData={setRegistrationData}/>}
    </>
  )
}

export default Registration