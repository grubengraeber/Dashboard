import {ListGroup} from "react-bootstrap";
import {ListItem} from "./ListItem";

export const List = ({list}) => {

    return (
        <>
            <ListGroup>
                {list.map(item =>
                    item.done ? "" :
                        <ListItem id={item.id}
                                  checked={item.done}
                                  count={item.count}
                                  name={item.name}
                                  key={item.id}
                        />
                )}

            </ListGroup>
        </>
    );
};