import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header"
import {Footer} from "./components/Footer/Footer"
import {Home} from "./pages/Home/Home";
import {ShoppingList} from "./pages/ShoppingList/ShoppingList";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/ShoppingList"} element={<ShoppingList/>}></Route>
            </Routes>
            <Footer/>
        </Router>

    );
}

export default App;
