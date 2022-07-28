import {Card} from "react-bootstrap";
import {List} from "./List";
import {BorderManagement} from "../../PageStyle/BorderManagement";

export const ListContainer = props => {
    return (
        <>
            <Card style={BorderManagement}>
                <List />
            </Card>
        </>
    );
};