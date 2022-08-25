import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ShoppingList } from "./pages/ShoppingList/ShoppingList";
import React from "react";
import { Header } from "./components/Header";
import { Box } from "@mui/system";
import BudgetSite from "./pages/BudgetTracker/BudgetSite";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { StateProvider } from "./state/appState";

const initialState = {
    dateFilter: "month"
}

const queryClient = new QueryClient();
function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <QueryClientProvider client={queryClient}>
                <StateProvider value={initialState}>
                    <Router>
                        <Box sx={{ margin: "50px", padding: "10px" }}>
                            <Header />
                            <Routes>
                                <Route path={"/"} element={<Home />}></Route>
                                <Route path={"/ShoppingList"} element={<ShoppingList  />}></Route>
                                <Route path={"/BudgetTracker"} element={<BudgetSite />}></Route>
                            </Routes>
                        </Box>
                    </Router>
                </StateProvider>
            </QueryClientProvider>
        </LocalizationProvider>

    );
}

export default App;
