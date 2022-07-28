import {ListGroup} from "react-bootstrap";
import {ListItem} from "./ListItem";

export const List = props => {
    const ListItems = [
        {
            "id": 1,
            "name": "test1",
            "count": 3,
            "done": false
        },
        {
            "id": 2,
            "name": "test2",
            "count": 1,
            "done": false
        },
        {
            "id": 3,
            "name": "test3",
            "count": 15,
            "done": false
        }
    ]
    return (
        <>
            <ListGroup>
                {ListItems.map(item =>
                    item.done ? "" :
                    <ListItem id={item.id}
                              checked={item.done}
                              count={item.count}
                              name={item.name}
                    />
                )}

            </ListGroup>
        </>
    );
};