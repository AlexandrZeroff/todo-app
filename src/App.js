import React from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import useTasks from './useTasks.js';

function App() {

  const { tasks, addTask, deleteTask} = useTasks([]);

  return (

    <>
      <div className='flex-1'>
        <ToDoList
          todos={tasks}
          deleteTodo={deleteTask}
        />
      </div>
      <ToDoForm
        className='mb-0'
        saveTodo={taskText => {
          const trimmed = taskText.trim()
          if (trimmed.length > 0) {
            addTask(trimmed)
          }
        }} />

    </>


  );
}

export default App;
