import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';
import useInputState from './useInputState.js';
import { addTask } from './store/taskSlice';
import { useDispatch } from 'react-redux';



const TodoForm = () => {

    const { value, onChange, reset } = useInputState('');

    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch(addTask({value}));
        reset();
    }

    const submitForm = event => {
        event.preventDefault();
        addTodo();
        reset();
    }

    return (
        <form className='flex flex-row flex-wrap'
            onSubmit={submitForm}
        >
            <TextField
                sx={{
                    background: '#5c70be',
                    marginRight: 2,
                    '& .Mui-focused': {
                        background: 'whitesmoke',
                        color: grey[700],
                        outlineColor: '#5c70be'
                    }
                }}
                size='small'
                className='min-w-[200px] flex-1'
                variant="outlined"
                label="New task"
                onChange={onChange}
                value={value}
            />

            <Button
                sx={{
                    background: 'whitesmoke',
                    color: '#5c70be',
                    '&:hover': {
                        background: '#5c70be',
                        color: 'whitesmoke'
                    }
                }}
                className='flex-none'
                variant='contained'
                onClick={submitForm}
            >Create task</Button>

        </form>
    );
};

export default TodoForm;