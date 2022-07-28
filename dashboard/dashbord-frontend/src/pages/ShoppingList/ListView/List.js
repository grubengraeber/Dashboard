import {ListGroup} from "react-bootstrap";
import {ListItem} from "./ListItem";

export const List = props => {
    const ListItems = [
        {
            "id": 1,
            "name": "distance test1",
            "count": 11,
            "done": false
        },
        {
            "id": 2,
            "name": "distance test2",
            "count": 20,
            "done": false
        },
        {
            "id": 3,
            "name": "distance test3",
            "count": 31,
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