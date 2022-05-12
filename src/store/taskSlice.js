import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask(state, action) {
            const trimmed = action.payload.value.trim()
            if (trimmed.length > 0) {
                state.tasks.push({
                    id: new Date().toISOString(),
                    text: action.payload.value,
                    completed: false
                })
            }
        },
        removeTask(state, action) {
            state.tasks = state.tasks.filter(
                task => task.id !== action.payload.id
            )
        },
        completeTask(state, action) {
            const toggleTask = state.tasks.find(task => task.id === action.payload.id);
            toggleTask.completed = !toggleTask.completed;
        }
    },
});

export const { addTask, removeTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;