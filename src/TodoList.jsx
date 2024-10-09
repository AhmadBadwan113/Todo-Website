import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useState, useEffect } from 'react';
import './todoList.css';


//calls from local storage
const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("listItems"));
    if (!data) return [];
    return data;
}

export default function TodoList() {
    const [listItems, setListItems] = useState(getInitialData);

    //saves to local storage
    useEffect(() => {
        localStorage.setItem('listItems', JSON.stringify(listItems));
    }, [listItems])

    const removeTodo = (id) => {
        setListItems(prevTodos => {
            return prevTodos.filter(t => t.id !== id)
        })
    }

    const toggleTodo = (id) => {
        setListItems((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    };

    const addTodo = text => {
        setListItems(prevTodos => {
            return [...prevTodos, { id: crypto.randomUUID(), text: text, completed: false }]
        })
    }

    return (
        <div>
            <List sx={{ bgcolor: '#6A9C89' }}>
                    {listItems.map(item => {
                        return (
                            <TodoItem
                                item={item}
                                key={item.id}
                                remove={removeTodo}
                                toggle={() => toggleTodo(item.id)}
                            />
                        )
                    })}
                <TodoForm addTodo={addTodo} />
            </List>
        </div>
    )
}