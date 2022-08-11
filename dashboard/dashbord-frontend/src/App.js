import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {ShoppingList} from "./pages/ShoppingList/ShoppingList";
import {BudgetTracker} from "./pages/BudgetTracker/BudgetTracker";
import React from "react";
import {Header} from "./components/Header";
import { Box } from "@mui/system";

function App() {
    return (
        <Router>
            <Box sx={{ margin: "50px", padding: "10px"}}>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/ShoppingList"} element={<ShoppingList/>}></Route>
                <Route path={"/BudgetTracker"} element={<BudgetTracker/>}></Route>
            </Routes>
            </Box>
        </Router>

    );
}

export default App;
