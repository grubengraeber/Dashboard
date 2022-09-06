import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ShoppingList } from "./pages/ShoppingList/ShoppingList";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Box } from "@mui/system";
import BudgetSite from "./pages/BudgetTracker/BudgetSite";
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




const initialState = {
    dateFilter: "month"
}

const queryClient = new QueryClient();
function App() {
    // useMediaQuery('(prefers-color-scheme: dark)') CHECKS FOR OS SET UP THEME SETTINGS
    const [darkMode, setDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'))
    // for Error-, Information- and Successmessages
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("An Error occured!")
    const [isSuccess, setIsSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("Success!")
    const [isInformation, setIsInformation] = useState(false)
    const [informationMessage, setInformationMessage] = useState("This is an information")

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
                        <Router>
                            <Box sx={{ margin: "50px", padding: "10px" }}>
                                <CssBaseline>
                                    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                                    <Routes>
                                        <Route path={"/"} element={<Home />}></Route>
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
                                        }></Route>
                                        <Route path={"/BudgetTracker"} element={<BudgetSite />}></Route>
                                        <Route path={"/login"} element={<Login />}></Route>
                                        <Route path={"/register"} element={<Registration />}></Route>
                                        <Route path={"/changePassword"} element={<ChangePassword />}></Route>
                                        <Route path={"/forgotPassword"} element={<NewPassword />}></Route>
                                    </Routes>
                                </CssBaseline>
                            </Box>
                        </Router>
                    </StateProvider>
                </QueryClientProvider>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
