import { Button, Grid, Paper, TextField, Link, Stack, Checkbox, Typography, InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

/* 
TODO:
     - CHECK IF EMAIL IS ALREADY TAKEN
     - IF SO LOAD PAGE AGAIN WITH FIRST NAME, LAST NAME FILLED IN ALREADY 
      AND ERROR MESSAGE FOR ALREADY USED EMAIL ADDRESS
     - IF NOT REGISTER USER
*/

function RegistrationForm({ setRegistrationData }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /
    navigate('/login');
  };

  // NEXT 2 LINES ARE FOR MAKING THE CHECKBOX MANDATORY
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [checkMessage, setCheckMessage] = useState(false)

  function togglePassword(clickEvent) {
    clickEvent.preventDefault();
    setShowPassword(!showPassword);
  }

  function onMouseDown(mouseDownEvent) {
    mouseDownEvent.preventDefault();
  }

  // NEXT FUNCTION IS FOR MAKING THE CHECKBOX MANDATORY
  function handleCheck() {
    setCheckboxChecked(!checkboxChecked);
    !checkboxChecked ? setCheckMessage(false) : setCheckMessage(true)
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
    email: yup
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
      .required("Password is required."),
    // TERMS SCHEMA DOESN'T CHANGE ANYTHING
    terms: yup
      .bool()
      .required("Check box before submitting.")
  })

  // NEXT LINE FOR FORM VALIDATION
  const { register, formState: { errors }, handleSubmit, control } = useForm(
    {
      // MODE DEFINES WHEN THE VALIDATION IS CHECKED
      mode: "onBlur",
      // RESOLVER TAKES A RESOLVER WITH A SPECIFIED SCHEMA
      resolver: yupResolver(schema)
    }
  );
  // ONSUBMIT FUNCTION WITH THE 'CHECKBOXCHECKED' STATE IS FOR MAKING THE CHECKBOX MANDATORY
  // TERMS (CHECKBOX) VALUE IS RETURNED AS FALSE, BUT HAS TO BE CLICKED TO SUBMIT SO IT SHOULD WORK
  const onSubmit = (data) => checkboxChecked ? setRegistrationData(data) : setCheckMessage(true);

  return (
    <>
      <Paper
        sx={{
          margin: "20px",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}>
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
                {...register("firstName", { required: "Required" })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
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
                      <PersonIcon />
                    </InputAdornment>
                  )
                }}
                {...register("lastName", { required: "Required" })}
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
              {...register("email", { required: "Required" })}
              error={!!errors.email}
              helperText={errors && errors.email && errors.email.message ? errors.email.message : null}
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
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!errors.password}
              helperText={errors && errors.password && errors.password.message ? errors.password.message : null}
              autoComplete={"new-password"}
              {...register("password", { required: "Required" })}
            />
            <Stack direction={"row"} spacing={1} display={"flex"} alignItems={"center"}>
              <Controller as={Checkbox} control={control} name="terms" render={({ field }) => (

                <Checkbox name="terms"
                  {...field} required={true} // REQUIRED PROPERTY DOESN'T CHANGE ANYTHING
                  checked={checkboxChecked} // FOR MANDATORY CHECKBOX
                  onChange={handleCheck} // FOR MANDATORY CHECKBOX
                />

              )} defaultValue={false} />
              <Typography >I aggree to the Terms & Conditions!</Typography>
              <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
            </Stack>
            {/* NEXT LINE IS DISPLAYING A MESSAGE AFTER SUBMIT IF CHECKBOX IS UNCHECKED*/}
            {checkMessage ? <Typography color={"error"} >*Check Checkbox first!</Typography> : null}
            <Button
              variant="contained"
              type={'submit'}
            >
              sign up
            </Button>
            <Stack direction={"row"} spacing={1} justifyContent={"center"}>
              <Typography>Already have an account?</Typography>
              <Link
                onClick={navigateToLogin}
              >
                Sign in
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Paper>
    </>
  )
}

export default RegistrationForm