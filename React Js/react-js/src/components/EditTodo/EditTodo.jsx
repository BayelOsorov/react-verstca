import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { todoContext } from '../../context/TodoContext';

const EditTodo = (props) => {
    const { taskToEdit, saveTask } = useContext(todoContext)
    const [newEditItem, setNewEditItem] = useState(taskToEdit)

    useEffect(() => {
        setNewEditItem(taskToEdit)
    }, [taskToEdit])

    function handleEditInput(e) {
        let newTask = {
            ...newEditItem,
            task: e.target.value
        }
        setNewEditItem(newTask)
    }
    return (
        <div>
            {newEditItem ? <><input onChange={handleEditInput} value={newEditItem.task} type="text" />

                <button onClick={saveTask(newEditItem, props.history)} >Save</button></> : <h1>Loading</h1>}

        </div>
    );
};

export default EditTodo;