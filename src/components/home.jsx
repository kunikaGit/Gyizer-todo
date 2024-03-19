import React, { useState } from "react";
import Header from "./header";
import TodoForm from "./todoForm";
import TodoItem from "./todoItems";
import { Container, Row } from "react-bootstrap";

const Home = () => {
   // Value of todos
   const [todos, setTodos] = useState([]);

   const addTodo = todo => {
      setTodos([...todos, todo]);
   };
   const deleteTodo = todoToDelete => {
      setTodos(todos.filter(todo => todo !== todoToDelete));
   };
    
   const updateTodo = (todoUpdate,key) =>{
      console.log(todoUpdate)
      console.log(key)
   }
   return (
      <>
         <Header />
         <TodoForm addTodo={addTodo}  />
         <Container>
            <div className="todoItemBox">
               <Row>
                  {todos.map((todo, index) => (
                     
                     <TodoItem task={todo} key={index}  onDelete={deleteTodo} onUpdate={updateTodo}/>
                  ))}
               </Row>
            </div>
         </Container>
      </>
   );
};

export default Home;
