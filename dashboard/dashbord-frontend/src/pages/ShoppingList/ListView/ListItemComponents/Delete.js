import {AiOutlineDelete} from "react-icons/ai";

export const Delete = ({id})=> {
    function deleteItem(clickEvent) {
        console.log("ItemId: " + clickEvent.target.id)
        // for further update

    }

    return (
        <>
            <AiOutlineDelete onClick={deleteItem} id={id}/>
        </>
    );
};