import React, { useState } from "react";

export default initialValue => {

    const [tasks, setTasks] = useState(initialValue);

    return {
        tasks,

        addTask: taskText => {
            setTasks([...tasks, {
                id: new Date().toISOString(),
                text: taskText,
                completed: false
            }]);
        },

        completeTask: taskID => {
            setTasks(tasks.map(
                task => {
                    if (task.id !== taskID) return task;
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
            ))
        },

        deleteTask: delID => {
            const newTasks = tasks
                .filter(task => task.id !== delID);
            setTasks(newTasks);
        }
    }

}