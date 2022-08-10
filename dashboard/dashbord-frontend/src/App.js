import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {ShoppingList} from "./pages/ShoppingList/ShoppingList";
import {BudgetHarmony} from "./pages/BudgetHarmony/BudgetHarmony";
import React from "react";
import {Header} from "./components/Header";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/ShoppingList"} element={<ShoppingList/>}></Route>
                <Route path={"/BudgetHarmony"} element={<BudgetHarmony/>}></Route>
            </Routes>
        </Router>

    );
}

export default App;
