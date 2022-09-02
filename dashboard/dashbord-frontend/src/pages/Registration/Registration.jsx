import React, { useEffect, useState } from 'react';
import RegistrationForm from './RegistrationForm'
import { SuccessMessage } from "../../components/Success/SuccessMessage"
import { ErrorMessage } from "../../components/Error/ErrorMessage"

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

  if (isErrorFromOutside) {
    setIsError(true);
    setErrorMessage(errorMessageFromOutside)
  }
  if (isSuccessFromOutside) {
    setIsSuccess(true);
    setSuccessMessage(successMessageFromOutside)
  }

    useEffect(() => {
      if(registrationData) {
        console.log(registrationData)
        //TODO use Data for registration process
        // post
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
    {isSuccess ? <SuccessMessage open={isSuccess} setOpen={setIsSuccess} successMessage={successMessage}/> :
    <RegistrationForm setRegistrationData={setRegistrationData}/> 
    }
    </>
  )
}

export default Registration