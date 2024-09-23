import React, { useState } from "react";
import { Modal, Button} from "react-bootstrap";

function DeleteList(props) {
    const [show, steShow] = useState(false);

    const handleClose = () => steShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragmant>
            <Button 
            varient="primary"
            onClick={(evt)=> {
                handleShow();
                props.getList(evt,props.elementId);
            }}
            >
                Delete
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text"
                        placeholder="Title"
                        name="title"
                        value={props.singledata.title}
                        disabled={true}
                        className="d-block my-3"
                        >
                        </input>
                        <input type="text"
                            placeholder="author"
                            name="author"
                            value={props.singleData.author}
                            disabled={true}
                            className="d-block my-3"
                            >
                        </input>
                </Modal.Body>
                <Modal.Footer> 
                    <Button variant="secondary" onClick={handleCLose}>
                    Close
                    </Button>
                    <Button
                        varient="primary"
                        onClick={(event) => {
                            handleClose();
                            props.deleteList(event, props.elementId);
                        }}
                        >
                            Delete
                        </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragmant>
    )
}