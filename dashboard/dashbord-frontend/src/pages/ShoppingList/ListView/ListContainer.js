import {Card} from "react-bootstrap";
import {List} from "./List";
import {BorderManagement} from "../../PageStyle/BorderManagement";
import {NewItemModal} from "./NewItemModal";

export const ListContainer = props => {

    return (
        <>
            <Card style={BorderManagement}>
                <NewItemModal/>
                <List/>
            </Card>
        </>
    );
};