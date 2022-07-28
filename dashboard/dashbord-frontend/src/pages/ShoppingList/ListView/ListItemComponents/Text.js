import {FormControl} from "react-bootstrap";
import {useState} from "react";

export const Text = ({name, id}) => {

    const [text, setText] = useState(name)
    const changedText = function (event) {

        setText(event.target.value)
        console.log(text + event.target.id)
    }

    const changeStyle = function (event) {
        event.target.style.backgroundColor = "white"
    }

    return (
        <>
            <FormControl
                type="textarea"
                id={id}
                value={text}
                onChange={changedText}
                onClick={changeStyle}
                className={"bg-light"}
                size={"sm"}
            />
        </>
    );
};