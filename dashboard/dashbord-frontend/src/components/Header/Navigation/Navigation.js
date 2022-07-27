import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {NavigationStyle} from "./NavigationStyle"

export const Navigation = props => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className={"me-auto"}>
                        <NavLink className={"nav-link"} to={"/"} style={NavigationStyle}>Home</NavLink>
                        <NavLink className={"nav-link"} to={"/ShoppingList"} style={NavigationStyle}>Shopping
                            List</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};