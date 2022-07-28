import {Col, Container, FormCheck, ListGroup, Row} from "react-bootstrap";
import NumericInput from "react-numeric-input";
import {Text} from "./ListItemComponents/Text";
import {BorderManagement} from "../../PageStyle/BorderManagement";
import {Delete} from "./ListItemComponents/Delete";
import {AiOutlineCheck} from "react-icons/ai";

export const ListItem = ({id, name, count, checked}) => {
    return (
        <>
            <Container style={BorderManagement}>
                <ListGroup.Item key={id} action variant={"info"}>
                    <Row className={"align-items-center"}>
                        <Col><Text name={name} id={id}/></Col>
                        <Col><FormCheck label={AiOutlineCheck()} type={"switch"} onChange={() => {checked= true}} defaultChecked={checked}/></Col>
                        <Col><NumericInput value={count} size={count > 9 ? 2 : 1} mobile={true}/></Col>
                        <Col><Delete id={id}/></Col>
                    </Row>
                </ListGroup.Item>

            </Container>
        </>
    );
};