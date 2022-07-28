import {Col, Container, FormCheck, ListGroup, Row} from "react-bootstrap";
import NumericInput from "react-numeric-input";
import {Text} from "./ListItemComponents/Text";

export const ListItem = ({id, name, count, checked}) => {
    return (
        <>
            <Container>
                <ListGroup.Item key={id} action variant={"dark"}>
                    <Row className={"align-items-center"}>
                        <Col><Text name={name} id={id}/></Col>
                        <Col><FormCheck label={"Done"} checked={checked}/></Col>
                        <Col><NumericInput value={count} size={count > 9 ? 2 : 1} mobile={true}/></Col>
                    </Row>
                </ListGroup.Item>

            </Container>
        </>
    );
};