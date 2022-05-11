import React, { useState } from "react";

export default initialValue => {

    const [tasks, setTasks] = useState(initialValue);

    return {
        tasks, 

        addTask: taskText => {
            setTasks([...tasks, taskText]);
        },

        deleteTask: delIndex => {
            const newTasks = tasks
            .filter((_, index) => index !== delIndex);
            setTasks(newTasks);
        }
    }

}