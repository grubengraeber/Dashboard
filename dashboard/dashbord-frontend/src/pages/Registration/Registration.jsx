import { Button, Grid, TextField, Link, Stack, Checkbox, FormControlLabel, Typography, InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";


function Registration() {

    const [firstNameError, setFirstNameError] = useState(false)
    const [helperTextFirstName, setHelperTextFirstName] = useState("required")
    const [lastNameError, setLastNameError] = useState(false)
    const [emailAddressError, setemailAddressError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [showPassword, setShowPassword] = useState(false);

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    function onMouseDown(mouseDownEvent) {
        mouseDownEvent.preventDefault();
    }

    // VALIDATION SCHEMA matches(REGEX, String: error message)
    const schema = yup.object().shape({
      firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers.")
        .matches(/^[a-zA-Z0-9_.-]*$/, "No special characters.")
        .required("First name is required."),
      lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers.")
        .matches(/^[a-zA-Z0-9_.-]*$/, "No special characters.")
        .required("Last name is required."),
        emailAddress: yup
          .string()
          .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Enter a valid email address.")
          .required("Email address is required."),
        password: yup
          .string()
          .matches(/[^ ]{8}/, "Password should contain at least 8 characters.")
          .matches(/(?=.*[a-z])/, "Password should contain at least one lower case letter.")
          .matches(/(?=.*[A-Z])/, "Password should contain at least one upper case letter.")
          .matches(/(?=.*\d)/, "Password should contain at least one digit.")
          .matches(/(?=.*\W)/, "Password should contain at least one special character.")
          .required("Password is required.")

    })

    // NEXT LINE FOR FORM VALIDATION
    const { register, formState: { errors }, handleSubmit, control } = useForm(
      {
        mode: "onChange",
        resolver: yupResolver(schema)
      }
    );
    const onSubmit = (data) => console.log(data);

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
                onSubmit={handleSubmit(onSubmit)}
                spacing={2}
                noValidate
                autoComplete="off"
                >
                
                <Stack direction={"row"} spacing={2}>
                    <TextField 
                    label="First Name" 
                    required 
                    type={"text"}
                    error={!!errors.firstName}
                    helperText={errors && errors.firstName && errors.firstName.message ? errors.firstName.message : null}
                    {...register("firstName", {required: "Required"})}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PersonIcon/>
                          </InputAdornment>
                        )
                      }}
                    autoFocus
                    />
                    <TextField 
                    label="Last Name" 
                    required 
                    type={"text"}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PersonIcon/>
                          </InputAdornment>
                        )
                      }}
                    {...register("lastName", {required: "Required"})}
                    error={!!errors.lastName}
                    helperText={errors && errors.lastName && errors.lastName.message ? errors.lastName.message : null}
                    />
                </Stack>
                <TextField 
                label="Email Address" 
                fullWidth 
                required 
                type={"email"}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AlternateEmailIcon />
                      </InputAdornment>
                    ),
                  }}
                autoComplete={"email"}
                {...register("emailAddress", {required: "Required"})}
                error={!!errors.emailAddress}
                helperText={errors && errors.emailAddress && errors.emailAddress.message ? errors.emailAddress.message : null}
                />
                {/* <TextField label="Username" required type={"text"}/> */}
                <TextField 
                label="Password" 
                required 
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePassword}
                      onMouseDown={onMouseDown}
                      edge="end"
                      >
                          {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/> }
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!errors.password}
                helperText={errors && errors.password && errors.password.message ? errors.password.message : null}
                autoComplete={"new-password"}
                {...register("password", {required: "Required"})}
                />
                <Stack direction={"row"} spacing={1}>
                  <Controller as={Checkbox} control={control} name="remember" render={({field}) => (
                    
                    <Checkbox name="remember" {...field}/> 
                    
                  )} defaultValue={false}/> 
                  <Typography display={"flex"} alignItems={"center"}>Remember me</Typography>
                </Stack>
                <Button 
                variant="contained" 
                type={'submit'}
                >
                    sign up
                </Button>
                <Stack direction={"row"} spacing={1} justifyContent={"center"}>
                    <Typography>Already have an account?</Typography>
                    <Link 
                    href={"/login"}
                    >
                        Sign in
                    </Link>
                </Stack> 
            </Stack>
        </Grid>
    </>
  )
}

export default Registration