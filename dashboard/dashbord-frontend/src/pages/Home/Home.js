import {Card, Container, Row} from "react-bootstrap";
import {TextCenter} from "../../components/Style/TextCenter";
import {BorderManagement} from "../PageStyle/BorderManagement";

export const Home = props => {
    return (
        <>
            <Container>
                <Row>
                    <Card style={BorderManagement}>
                        <Card.Body>
                            <Card.Title style={TextCenter}>HOME</Card.Title>
                            <Card.Subtitle>This is the Homepage</Card.Subtitle>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aliquid animi autem harum iure qui quis quos reiciendis sequi voluptate voluptatem.
                                Alias aspernatur aut enim fugiat inventore libero sint suscipit. At.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
};