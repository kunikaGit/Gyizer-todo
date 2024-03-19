import React, { useState } from "react";
import { Col } from "react-bootstrap";

const TodoItem = ({ task,key ,onDelete,onUpdate}) => {
    const [buttonVisible, setButtonVisible] = useState(true);
    const toggleButtons = () => {
        setButtonVisible(!buttonVisible);
    };

    const handleDelete = () => {
        // Handle delete functionality
        // Show Info button again
        setButtonVisible(true);
        onDelete(task);
    };

    const handleUpdate = () => {
        // Handle update functionality
        // Show Info button again
        setButtonVisible(true);
        onUpdate(task,key)
    };
    return (
        <Col md={4}>
            <div className="todo-item d-flex justify-content-between align-items-center">
             <div>
             <h2>{task.title}</h2>
                <p>{task.input}</p>
                <p>{key}</p>
             </div>
                <div className="info-btn">
                    {!buttonVisible && (
                        <div>
                            <img src="images/edit.png" onClick={handleUpdate} />
                            <img src="images/delet.png" onClick={handleDelete} />{''}
                        </div>
                    )}
                    {buttonVisible && (
                        <img src="images/info.png" onClick={toggleButtons} />
                    )}

                </div>
            </div>

        </Col>
    );
};

export default TodoItem;
