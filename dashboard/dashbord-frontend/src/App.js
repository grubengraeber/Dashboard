import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {ShoppingList} from "./pages/ShoppingList/ShoppingList";
import React from "react";
import {Header} from "./components/Header";
import BudgetSite from "./pages/BudgetTracker/BudgetSite";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <Router>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/ShoppingList"} element={<ShoppingList/>}></Route>
                <Route path={"/Budget"} element={<BudgetSite/>}></Route>
            </Routes>
        </Router>
        </QueryClientProvider>

    );
}

export default App;
