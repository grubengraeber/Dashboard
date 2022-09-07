import { Button, Grid, Paper, TextField, Link, Stack, Typography, InputAdornment, IconButton } from '@mui/material';
// import { Checkbox } from "@mui/material";
// import { Controller } from "react-hook-form";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

/* 
TODO:
     - CHECK FOR VALID EMAIL PASSWORD PAIR
     - IF SO LOG USER IN
     - IF NOT DISPLAY ERROR MESSAGE ON REFRESHED PAGE
     - DO SOMETHING WITH REMEMBER ME CHECKBOX
*/

function LoginForm({ setLoginData }) {

    const [showPassword, setShowPassword] = useState(false);

    function togglePassword(clickEvent) {
      clickEvent.preventDefault();
      // TRYING TO SET THE CURSOR BACK TO THE END OF THR INPUT FIELD
      setShowPassword(!showPassword);
    }

    function onMouseDown(mouseDownEvent) {
        mouseDownEvent.preventDefault();
    }

    // VALIDATION SCHEMA matches(REGEX, String: error message)
    const schema = yup.object().shape({
          emailAddress: yup
            .string()
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Enter a valid email address.")
            .required("Email address is required."),
          password: yup
            .string()
            .required("Password is required.")
  
      })

      // NEXT LINE FOR FORM VALIDATION
      const { register, formState: { errors }, handleSubmit /*, control */ } = useForm(
        {
            // MODE DEFINES WHEN THE VALIDATION IS CHECKED
            mode: "onBlur",
            // RESOLVER TAKES A RESOLVER WITH A SPECIFIED SCHEMA
            resolver: yupResolver(schema)
        }
      );
      const onSubmit = (data) => setLoginData(data);

  return (
    <>
    <Paper 
      sx={{margin: "20px", 
      padding: "10px", 
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      }}>
        <Grid container 
                display={"flex"} 
                alignItems={"center"}
                justifyContent={"center"} 
                spacing={2}
                margin={"10px"}>
            <Stack
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                spacing={2}
                noValidate
                autoComplete="off"
                >
                <TextField 
                label="Email Address" 
                fullWidth 
                required 
                autoFocus
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
                <Link href={"/forgotPassword"}>Forgot your password?</Link>
                {/* <Stack direction={"row"} spacing={1} display={"flex"} alignItems={"center"}>
                  <Controller as={Checkbox} control={control} name="remember" render={({field}) => (
                    
                    <Checkbox name="remember" {...field}/> 
                    
                  )} defaultValue={false}/> 
                  <Typography >Remember me</Typography>
                  </Stack> */}
                <Button 
                variant="contained" 
                type={'submit'}
                >
                    sign in
                </Button>
                <Stack direction={"row"} spacing={1} justifyContent={"center"}>
                    <Typography>No account yet?</Typography>
                    <Link 
                    href={"/register"}
                    >
                        Sign up
                    </Link>
                </Stack> 
            </Stack>
        </Grid>
        </Paper>
    </> 
  )
}

export default LoginForm