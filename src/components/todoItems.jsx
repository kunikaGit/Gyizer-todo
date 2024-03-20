import React, { useState } from "react";
import { Col,Modal,Button } from "react-bootstrap";


const TodoItem = ({ task, keyOn, onDelete, onUpdate, isThereUpdate }) => {
    const [buttonVisible, setButtonVisible] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleButtons = () => {
        setButtonVisible(!buttonVisible);
    };

    const handleDelete = () => {
        setButtonVisible(true);
        onDelete(task);
    };

    const handleUpdate = () => {
        setButtonVisible(true);
        onUpdate(task, keyOn)
    };
    return (
        <Col md={4}>
            <div className="todo-item d-flex justify-content-between align-items-center">
                <div>
                    <h2>{task.title}</h2>
                    <p>{task.input}</p>
                </div>
                {!isThereUpdate &&
                    <div className="info-btn">
                        {!buttonVisible && (
                            <div>
                                <img src="images/edit.png" onClick={handleUpdate} alt="" />
                                <img src="images/delet.png" onClick={handleShow} alt="" />{''}
                            </div>
                        )}
                        {buttonVisible && (
                            <img src="images/info.png" onClick={toggleButtons} alt="" />
                        )}

                    </div>}
            </div>
            <Modal size="sm" centered show={show} onHide={handleClose} animation={false}>
                <Modal.Header >
                    <h4>Delete this task?</h4>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>No</Button>
                    <Button variant="primary" onClick={handleDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </Col>

    );
};

export default TodoItem;
