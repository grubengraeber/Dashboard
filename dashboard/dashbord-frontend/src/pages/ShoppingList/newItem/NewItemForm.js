import {Button, Form, Row} from "react-bootstrap";
import NumericInput from "react-numeric-input";
import {getValue} from "@testing-library/user-event/dist/utils";
import {BorderManagement} from "../../PageStyle/BorderManagement";
import {useState} from "react";


export const NewItemForm = props => {
    const [task, setTask] = useState("")
    const [count, setCount] = useState(1)
    const handleAdd= (submitEvent) => {
        submitEvent.preventDefault()
        console.log("task: " + task + " count: " + count)
    }

    const handleChangeText = (changeEvent) => {
        setTask(changeEvent.target.value)
    }

    const handleChangeNumber = (changeEvent) => {
        setCount(changeEvent)
    }

    return (
        <>
            <Form onSubmit={handleAdd}>
                <Form.Group className="mb-3">
                    <Form.Label>Shopping-List Item</Form.Label>

                    <Row><Form.Control size={"lg"} type={"text"} id={"TaskName"} onChange={handleChangeText}
                                       value={task} placeholder={"Task Name"}/></Row>
                    <Form.Label>Amount of item</Form.Label>
                        <NumericInput  className="form-control" value={count} min={ 0 }
                                       onChange={handleChangeNumber}
                                       size={getValue() > 9 ? 2 : 1} mobile={true}/>
                    <Button style={BorderManagement} type={"submit"} variant="primary" size="lg" active
                            >Add</Button>
                </Form.Group>
            </Form>
        </>
    );
};