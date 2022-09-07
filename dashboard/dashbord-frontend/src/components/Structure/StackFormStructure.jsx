import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'


export const StackFormStructure = ({ structuredTextfields, submitButtonTitle, childrenBelowButton, handleSubmit }) => {

  return (
    <>
        <Stack
          component="form"
          onSubmit={handleSubmit}
          spacing={2}
          noValidate
          autoComplete="off"
          >
          {structuredTextfields}
          <Button 
          variant="contained" 
          type={'submit'}
          >
              {submitButtonTitle}
          </Button>
          {childrenBelowButton}
      </Stack>
    </>
  )
}
