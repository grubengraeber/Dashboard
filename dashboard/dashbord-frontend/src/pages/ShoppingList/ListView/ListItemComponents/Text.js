import {FormControl} from "react-bootstrap";
import {useState} from "react";

export const Text = ({name, id}) => {

    const [text, setText] = useState(name)
    const changedText = function (changeEvent) {
        changeEvent.target.className = "bg-light"
        setText(changeEvent.target.value)
        console.log(text + changeEvent.target.id)
    }

    const changeStyle = function (focusEvent) {
        focusEvent.target.className = "bg-light"
    }

    const sendInformation = function (blurEvent) {
        let value = blurEvent.target.value
        blurEvent.target.className = "bg-info"
        blurEvent.target.size = value.length
    }

    return (
        <>
            <FormControl
                type="textarea"
                id={id}
                value={text}
                onChange={changedText}
                onBlur={sendInformation}
                onFocus={changeStyle}
                className={"bg-info"}
                size={text.length * 0.9}
            />
        </>
    );
};