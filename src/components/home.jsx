import React, { useState } from "react";
import Header from "./header";
import TodoForm from "./todoForm";
import TodoItem from "./todoItems";
import { Container, Row } from "react-bootstrap";

const Home = () => {
   const [todos, setTodos] = useState([]);
   const [oldvalues, setOldvalues] = useState();
   const [isUpdate, setIsUpdate] = useState(false);

   const addTodo = todo => {
      setTodos([...todos, todo]);
   };
   const deleteTodo = todoToDelete => {
      setTodos(todos.filter(todo => todo !== todoToDelete));
   };

   const updateTodo = (todoUpdate, key) => {
      let obj = { title: todoUpdate.title, input: todoUpdate.input, key: key }
      setOldvalues(obj)
      setIsUpdate(true)
   }

   const setNewValues = details => {

      const updatedTodos = [...todos];

      updatedTodos[details.key] = {
         title: details.title,
         input: details.input
      };

      setTodos(updatedTodos);
      setOldvalues()
      setIsUpdate(false)
   }

   return (
      <>
         <Header />
         <TodoForm addTodo={addTodo} sendOldValues={oldvalues} sendUpdateValues={setNewValues} />
         <Container>
            <div className="todoItemBox">
              
                  {todos.length === 0 ? (
                     <div className="no-data">
                        <span>No data</span>
                     </div>
                  ) : (
                     <Row>
                        {todos.map((todo, index) => (
                           <TodoItem task={todo} keyOn={index} onDelete={deleteTodo} onUpdate={updateTodo} isThereUpdate={isUpdate} />
                        ))}
                      </Row>
                  )}
              
               {/* <Row>
                  {todos.map((todo, index) => (
                     <TodoItem task={todo} keyOn={index}  onDelete={deleteTodo} onUpdate={updateTodo} isThereUpdate={isUpdate}/>
                  ))}
               </Row> */}
            </div>
         </Container>
      </>
   );
};

export default Home;
