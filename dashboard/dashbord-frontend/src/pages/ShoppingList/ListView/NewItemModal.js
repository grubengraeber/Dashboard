import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import {NewItemForm} from "../newItem/NewItemForm";
import {BorderManagement} from "../../PageStyle/BorderManagement";

export const NewItemModal = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button style={BorderManagement} variant="primary" onClick={handleShow} className={"col-2"}>
                Add new item
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new list item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewItemForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
