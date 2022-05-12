import React from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { useState } from 'react';


function App() {

  const completeTask = taskID => {
    /*  setTasks(tasks.map(
       task => {
         if (task.id !== taskID) return task;
         return {
           ...task,
           completed: !task.completed
         }
       }
     )) */
  }

  return (
    <>
      <div className='flex-1'>
        <ToDoList/>
      </div>
      <ToDoForm />
    </>
  );
}

export default App;
