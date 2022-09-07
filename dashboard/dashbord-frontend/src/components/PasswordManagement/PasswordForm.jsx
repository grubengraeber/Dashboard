import { Button, Grid, Paper, TextField, Stack, InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

export const PasswordForm = ({ changePassword, setNewPasswordData }) => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

    const schema = yup.object().shape({
        oldPassword: yup
            .string()
            .required("Password is required."),
        newPassword: yup
            .string()
            .matches(/[^ ]{8}/, "Password should contain at least 8 characters.")
            .matches(/(?=.*[a-z])/, "Password should contain at least one lower case letter.")
            .matches(/(?=.*[A-Z])/, "Password should contain at least one upper case letter.")
            .matches(/(?=.*\d)/, "Password should contain at least one digit.")
            .matches(/(?=.*\W)/, "Password should contain at least one special character.")
            .required("Password is required."),
        repeatNewPassword: yup
            .string()
            .oneOf([yup.ref('newPassword'), null], "Should be the same as your prewritten password.")
            .required("Password is required."),
      })

    const { register, formState: { errors }, handleSubmit } = useForm(
        {
            // MODE DEFINES WHEN THE VALIDATION IS CHECKED
            mode: "onChange",
            // RESOLVER TAKES A RESOLVER WITH A SPECIFIED SCHEMA
            resolver: yupResolver(schema)
        }
      );
      const onSubmit = (data) => {console.log(data); setNewPasswordData(data)};


  return (
    
    <Paper 
      sx={{margin: "20px", 
      padding: "10px", 
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      }}>
        <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        noValidate
        autoComplete="off"
        >
            <Grid container 
            display={"flex"} 
            alignItems={"center"}
            justifyContent={"center"} 
            spacing={2}
            margin={"10px"}>
                <Stack direction={"column"} spacing={2}>
    {changePassword ? <TextField 
                label="Old password" 
                required 
                type={showOldPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {setShowOldPassword(!showOldPassword)}}
                      onMouseDown={(mouseDownEvent) => {mouseDownEvent.preventDefault()}}
                      edge="end"
                      >
                          {showOldPassword ? <VisibilityIcon/> : <VisibilityOffIcon/> }
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!errors.oldPassword}
                helperText={errors && errors.oldPassword && errors.oldPassword.message ? errors.oldPassword.message : null}
                autoComplete={"new-password"}
                {...register("oldPassword", {required: "Required"})}
                /> : <></>}

                <TextField 
                label="New password" 
                required 
                type={showNewPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {setShowNewPassword(!showNewPassword)}}
                      onMouseDown={(mouseDownEvent) => {mouseDownEvent.preventDefault()}}
                      edge="end"
                      >
                          {showNewPassword ? <VisibilityIcon/> : <VisibilityOffIcon/> }
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!errors.newPassword}
                helperText={errors && errors.newPassword && errors.newPassword.message ? errors.newPassword.message : null}
                autoComplete={"new-password"}
                {...register("newPassword", {required: "Required"})}
                />

                <TextField 
                label="Repeat new passsword" 
                required 
                type={showRepeatNewPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {setShowRepeatNewPassword(!showRepeatNewPassword)}}
                      onMouseDown={(mouseDownEvent) => {mouseDownEvent.preventDefault()}}
                      edge="end"
                      >
                          {showRepeatNewPassword ? <VisibilityIcon/> : <VisibilityOffIcon/> }
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!errors.repeatNewPassword}
                helperText={errors && errors.repeatNewPassword && errors.repeatNewPassword.message ? errors.repeatNewPassword.message : null}
                autoComplete={"new-password"}
                {...register("repeatNewPassword", {required: "Required"})}
                />
                <Button 
                  variant="contained" 
                  type={'submit'}
                  >
                      change password
                  </Button>
                  </Stack>
            </Grid>
        </Stack>
    </Paper>
  )
}
