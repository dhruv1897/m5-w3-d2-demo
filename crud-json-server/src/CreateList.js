import React, { useState } from "react";
import { Modal, Button } from "bootstrap";

function CreateList(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.header closeButton>
                    <Modal.Title>New List</Modal.Title>
                </Modal.header>
                <Modal.Body>
                    <input 
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={props.singledata.title}
                        onChange={props.handleChange}
                        className="d-block my-3"
                    />
                    <input 
                        type="text"
                        placeholder="Author"
                        name="author"
                        value={props.singledata.title}
                        onChange={props.handleChange}
                        className="d-block my-3"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleShow}>
                Create New List
                    </Button>
                </Modal.Footer>
            </Modal>
    </React.Fragment>
    );
}

export default CreateList;