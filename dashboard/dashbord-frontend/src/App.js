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



const initialState = {
    dateFilter: "month"
}

const queryClient = new QueryClient();
function App() {
    // useMediaQuery('(prefers-color-scheme: dark)') CHECKS FOR OS SET UP THEME SETTINGS
    const [darkMode, setDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'))
    

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
                                        <Route path={"/ShoppingList"} element={<ShoppingList  />}></Route>
                                        <Route path={"/BudgetTracker"} element={<BudgetSite />}></Route>
                                        <Route path={"/login"} element={<Login />}></Route>
                                        <Route path={"/register"} element={<Registration />}></Route> 
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
