import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { todoContext } from '../../context/TodoContext';

const AddTodo = () => {
    const [inpValue, setInpVal] = useState('')
    let { addTask } = useContext(todoContext)

    function handleClick() {
        let newObj = {
            task: inpValue,
            status: false,
        }
        addTask(newObj)
        setInpVal('')
    }
    return (
        <div>

            <input value={inpValue} onChange={(e) => setInpVal(e.target.value)} type='text' />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddTodo;