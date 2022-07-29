import {Card} from "react-bootstrap";
import {List} from "./List";
import {BorderManagement} from "../../PageStyle/BorderManagement";
import {NewItemModal} from "./NewItemModal";

export const ListContainer = props => {
    let list = [
        {
            "id": 1,
            "name": "Banane(n)",
            "count": 11,
            "done": false
        },
        {
            "id": 2,
            "name": "Smoothie(s)",
            "count": 8,
            "done": false
        },
        {
            "id": 3,
            "name": "Zwiebel(n)",
            "count": 5,
            "done": false
        }
    ]
    return (
        <>
            <Card style={BorderManagement}>
                <NewItemModal/>
                <List list={list}/>
            </Card>
        </>
    );
};