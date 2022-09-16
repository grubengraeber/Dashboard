import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ShoppingList } from "./pages/ShoppingList/ShoppingList";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Box } from "@mui/system";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { StateProvider } from "./state/appState";
import Login from "./pages/Login/Login";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Registration from "./pages/Registration/Registration";
import { ErrorMessage } from './components/Error/ErrorMessage'
import { SuccessMessage } from './components/Success/SuccessMessage'
import { InformationMessage } from './components/Information/InformationMessage'
import { ChangePassword } from "./pages/ChangePassword/ChangePassword";
import { NewPassword } from "./pages/NewPasword/NewPassword";
import { Household } from "./pages/Household/ManageHousehold/Household";
import { Admin } from "./pages/Admin/Admin";
import RequireAuth from "./components/Authentication/RequireAuth";
import useAuth from "./hooks/useAuth";
import { Unauthorized } from "./pages/Unauthorized/Unauthorized";
import ExpensesSite from "./pages/Expenses/ExpensesSite";




const initialState = {
    dateFilter: "month"
}


function App() {
    const queryClient = new QueryClient();
    // useMediaQuery('(prefers-color-scheme: dark)') CHECKS FOR OS SET UP THEME SETTINGS
    const [darkMode, setDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'))
    // for Error-, Information- and Successmessages
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("An Error occured!")
    const [isSuccess, setIsSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("Success!")
    const [isInformation, setIsInformation] = useState(false)
    const [informationMessage, setInformationMessage] = useState("This is an information")

    const { auth } = useAuth();

    const theme = React.useMemo(
        () =>
            createTheme(
                {
                    palette: {
                        mode: darkMode ? 'dark' : 'light',
                        primary: {
                            main: '#5cce3b',
                            light: '#64dd17',
                            dark: '#76ff03',
                        },
                        secondary: {
                            main: '#8c8a8a',
                            light: '#757575',
                            dark: '#bdbdbd',
                        },
                        background: darkMode ?
                            {
                                default: '#303030',
                                paper: '#424242',
                            } :
                            {
                                default: '#FAFAFA',
                                paper: '#FFFFFF',
                            },
                    },
                }
            ), [darkMode],
    )


    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <QueryClientProvider client={queryClient}>
                    <StateProvider value={initialState}>
                        {/* <Rounter> */}
                        <Box sx={{ margin: "50px", padding: "10px" }}>
                            <CssBaseline>
                                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                                <Routes>

                                    {/* OPEN ACCESSIBLE ROUTES */}
                                    <Route path={"/register"} element={<Registration />} />
                                    <Route path={"/login"} element={<Login />} />
                                    <Route path={"/forgotPassword"} element={<NewPassword />} />
                                    <Route path={"/unauthorized"} element={<Unauthorized />} />

                                    {/* RESTRICTED ROUTES FOR LOGGED IN USERS */}
                                    <Route element={<RequireAuth allowedRoles={['User', 'Admin']} />}>
                                        <Route path={"/"} element={<Home username={auth.firstName} />} />
                                        <Route path={"/changePassword"} element={<ChangePassword />} />
                                        <Route path={"/myHousehold"} element={<Household />} />
                                        <Route path={"/BudgetTracker"} element={<ExpensesSite />} />

                                        {/*<Route path={"/BudgetTracker"} element={<BudgetSite theme={theme} />>*/}
                                        <Route path={"/ShoppingList"} element={
                                            <>
                                                <ShoppingList
                                                    isError={isError}
                                                    isSuccess={isSuccess}
                                                    setErrorMessage={setErrorMessage}
                                                    setIsError={setIsError}
                                                    setSuccessMessage={setSuccessMessage}
                                                    setIsSuccess={setIsSuccess}
                                                    successMessage={successMessage}
                                                    errorMessage={errorMessage}
                                                    isInformation={isInformation}
                                                    setIsInformation={setIsInformation}
                                                    informationMessage={informationMessage}
                                                    setInformationMessage={setInformationMessage}
                                                />
                                                <ErrorMessage open={isError} setOpen={setIsError} errorMessage={errorMessage} />
                                                <SuccessMessage open={isSuccess} setOpen={setIsSuccess} successMessage={successMessage} />
                                                <InformationMessage open={isInformation} setOpen={setIsInformation} informationMessage={informationMessage} />
                                            </>
                                        } />
                                    </Route>

                                    {/* RESTRICTED ROUTES FOR LOGGED IN ADMINS */}
                                    <Route element={<RequireAuth allowedRoles={['Admin']} />}>
                                        <Route path={"/admin"} element={<Admin />} />
                                    </Route>

                                </Routes>
                            </CssBaseline>
                        </Box>

                    </StateProvider>
                </QueryClientProvider>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
