import {FooterStyle} from "./footerStyle";
import {Card, Container, Row} from "react-bootstrap";
import {TextCenter} from "../Style/TextCenter";


export const Footer = props => {
    return (
        <>
            <Container>
                <Row>
                    <Card bg={"dark"} style={{...FooterStyle, ...TextCenter}}>
                        <h2 style={{color: "white"}}>Menubar</h2>
                    </Card>
                </Row>
            </Container>
        </>
    );
};