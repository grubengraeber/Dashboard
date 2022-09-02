import { Button, Grid, TextField, Link, Stack, Checkbox, FormControlLabel, Typography, InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { yupResolver } from "@hookform/resolvers"
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

    // VALIDATION SCHEMA
    const schema = yup.object().shape({
      firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers.")
        .required("First name is required."),
      lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers.")
        .required("Last name is required.")
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
                    helperText={ok}
                    ref={register}
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
                autoComplete={"new-password"}
                {...register("password", {required: "Required"})}
                />
                <Controller as={Checkbox} control={control} name="remember" defaultValue={false}/>
                <FormControlLabel 
                control={<Checkbox  name="remember" />} 
                label={"Remember me"}
                />
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