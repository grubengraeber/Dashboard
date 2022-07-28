import {AiOutlineDelete} from "react-icons/ai";

export const Delete = ({id})=> {
    function deleteItem(clickEvent) {
        console.log("ItemId: " + clickEvent.target.id)

    }

    return (
        <>
            <AiOutlineDelete onClick={deleteItem} id={id}/>
        </>
    );
};