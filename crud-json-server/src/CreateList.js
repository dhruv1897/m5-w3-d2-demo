import React from "react";
import { Modal, Button } from "react-bootstrap";

class CreateList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    render() {
        const { singleData, handleChange, createList } = this.props;
        return (
            <React.Fragment>
                <Button variant="primary" onClick={this.handleShow}>
                    Create New List
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={singleData.title}
                            onChange={handleChange}
                            className="d-block my-3"
                        />
                        <input
                            type="text"
                            placeholder="Author"
                            name="author"
                            value={singleData.author}
                            onChange={handleChange}
                            className="d-block my-3"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {
                            this.handleClose();
                            createList();
                        }}>
                            Create New List
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default CreateList;
