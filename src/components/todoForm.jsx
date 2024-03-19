import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TodoForm = ({ addTodo }) => {
    const [titleValue, setTitleValue] = useState("");
    const [inputValue, setInputValue] = useState(""); // State for the second input

    const handleTitleChange = (e) => {
        setTitleValue(e.target.value);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const AddItem = () => {
        // Add both title and input values to the todo list
        addTodo({ title: titleValue, input: inputValue });
        setTitleValue("");
        setInputValue("");
    };

    // const setUpdateTodo = (title, value) =>{
    //     setTitleValue(title);
    //     setInputValue(value)
    // }
    return (
        <section>
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <div className="todoForm">
                            <div className="todo-inputs">
                                <input type="text" value={titleValue} placeholder="Title..." onChange={handleTitleChange} />
                                <input type="text" value={inputValue} placeholder="Input..." onChange={handleInputChange} />
                            </div>
                            <div className="todo-add">
                                <img src="images/add-btn.png" alt="Add" onClick={AddItem} />
                            </div>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </section>
    );
};

export default TodoForm;
