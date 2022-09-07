import React from 'react'
import { PasswordForm } from '../../components/PasswordManagement/PasswordForm'
import { Grid } from '@mui/material'


export const ChangePassword = () => {
  return (
    <>
        <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={4}>
                <PasswordForm changePassword={true} />
            </Grid>
        </Grid>
    </>
  )
}
