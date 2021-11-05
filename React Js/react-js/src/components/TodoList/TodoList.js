import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { todoContext } from '../../context/TodoContext';
import { Card } from 'react-bootstrap';
const TodoList = () => {
    const { todos,
        getTodosData,
        changeStatus,
        deleteTask,
        editTodo } = useContext(todoContext)

    useEffect(() => {
        getTodosData()
    }, [])
    return (
        <ul>
            {
                todos.map((item) => (
                    <li className={item.status ? 'completed' : ''}
                        key={item.id}>
                        <input type='checkbox'
                            checked={item.status}
                            onChange={() => changeStatus(item.id)}
                        />
                        {item.task}
                        <button onClick={() => deleteTask(item.id)}>Delete</button>
                        <Link to='/edit'>
                            <button onClick={() => editTodo(item.id)} >Edit</button>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default TodoList;