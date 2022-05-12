import React from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey, red } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'; 
import { removeTask, completeTask } from './store/taskSlice';

const TodoList = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.tasks.tasks)

    return (
        <List>
            {todos.map(todo => (
                <ListItem
                    sx={{
                        background: 'white',
                        borderRadius: 1,
                        '&:hover': {
                            background: '#eef0f8'
                        },
                        marginBottom: 0.5
                    }}
                    key={todo.id} dense button>
                    <Checkbox
                        sx={{
                            color: grey[600]
                        }}
                        checked={todo.completed}
                        tabIndex={-1}
                        onChange={() => dispatch(completeTask({id: todo.id}))}
                        disableRipple />
                    <ListItemText
                        sx={{
                            color: grey[800]
                        }}
                        primary={todo.text} />
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            sx={{
                                color: grey[600]
                            }}
                            onClick={() => {
                                dispatch(removeTask({id: todo.id}));
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}

export default TodoList;