import React, { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TodoForm = ({ addTodo,sendOldValues,sendUpdateValues }) => {
    const [titleValue, setTitleValue] = useState("");
    const [inputValue, setInputValue] = useState(""); 
    const [titleValueUpdate, setTitleValueUpdate] = useState("");
    const [inputValueUpdate, setInputValueUpdate] = useState(""); 

    useEffect(() => {
        if (sendOldValues) {
            setTitleValueUpdate(sendOldValues.title || "");
            setInputValueUpdate(sendOldValues.input || "");
        }
    }, [sendOldValues])

    const handleTitleChange = (e) => {
        setTitleValue(e.target.value);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleTitleChangeUpdate = (e) => {
        setTitleValueUpdate(e.target.value);
    };

    const handleInputChangeUpdate = (e) => {
        setInputValueUpdate(e.target.value);
    };

    const AddItem = () => {
        if(titleValue=='' || inputValue==''){
            alert("please fill some value")
            return
        }
        addTodo({ title: titleValue, input: inputValue });
        setTitleValue("");
        setInputValue("");
    };

    const UpdateItem = () =>{
        if(titleValueUpdate=='' || titleValueUpdate==''){
            alert("please fill some value")
            return
        }
        sendUpdateValues({ title: titleValueUpdate, input: inputValueUpdate,key:sendOldValues.key });
       
    }
    return (
        <section>
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <div className="todoForm">
                            {sendOldValues?
                            <div className="todo-inputs">
                                <input type="text" value={titleValueUpdate} placeholder="Title..." onChange={handleTitleChangeUpdate} />
                                <input type="text" value={inputValueUpdate} placeholder="Input..." onChange={handleInputChangeUpdate} />
                            </div>
                            :
                            <div className="todo-inputs">
                                <input type="text" value={titleValue} placeholder="Title..." onChange={handleTitleChange} />
                                <input type="text" value={inputValue} placeholder="Input..." onChange={handleInputChange} />
                            </div>
                            }
                            <div className="todo-add">
                                {
                                sendOldValues?
                                <img src="images/update.png" alt="Update" onClick={UpdateItem} />
                                :
                                <img src="images/add-btn.png" alt="Add" onClick={AddItem} />}
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
