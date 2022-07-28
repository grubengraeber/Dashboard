import {Container, Row} from "react-bootstrap";
import {ListContainer} from "./ListView/ListContainer";

export const ShoppingList = props => {
    return (
        <>
            <Container>
                <Row>
                    <ListContainer/>
                </Row>
            </Container>
        </>
    );
};