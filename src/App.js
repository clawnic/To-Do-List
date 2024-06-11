import React, { useState } from 'react';
import './App.css';
import Input from './components/Input'
import Task from './components/Task'

function App() {

  const [todos ,setodos]=useState([]);

  const addTodo = (newTodo)=>{
    setodos([...todos,newTodo]);
    console.log(todos);
  }

  const delTodo = (index)=>{
    const newTodos = todos.filter((_,i)=> i!==index);
    setodos(newTodos);
  }
  








  return (
    <div className="App">
      <div className='task-in'>
        <Input  m ={addTodo}/>
      </div>
      <div className='task-out'>
        <ul>
            {todos.map((todo, index) => (
                <Task key={index} task={todo} onDelete = {()=> delTodo(index)} />
                ))}
          </ul>

      </div>
      
      
    </div>
  );
}

export default App;
