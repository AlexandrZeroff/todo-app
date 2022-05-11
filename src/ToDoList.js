import React from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey, red } from '@mui/material/colors';

const TodoList = ({ todos, deleteTodo }) => (
    <List>
        {todos.map((todo, index) => (
            <ListItem
                sx={{
                    background: 'white',
                    borderRadius: 1,
                    '&:hover': {
                        background: '#eef0f8'
                    },
                    marginBottom: 0.5
                }}
                key={index.toString()} dense button>
                <Checkbox
                    sx={{
                        color: grey[600]
                    }}
                    tabIndex={-1}
                    disableRipple />
                <ListItemText
                    sx={{
                        color: grey[800]
                    }}
                    primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        sx={{
                            color: grey[600]
                        }}
                        onClick={() => {
                            deleteTodo(index);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);

export default TodoList;