import {Card, Container, Row} from "react-bootstrap";
import {HeaderStyle} from "./headerStyle";
import {Navigation} from "./Navigation/Navigation";
import {TextCenter} from "../Style/TextCenter";

export const Header = props => {
    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Card bg="dark" style={{...HeaderStyle, ...TextCenter}}>
                            <h1 style={{color: "white"}}>Dashboard</h1>
                            <Navigation/>
                        </Card>
                    </Row>
                </Container>
            </header>
        </>
    );
};