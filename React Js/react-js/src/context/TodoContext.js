import React, { useReducer } from 'react';
import axios from 'axios';
export const todoContext = React.createContext()
const INIT_STATE = {
    todos: [],
    taskToEdit: null
}
let API = 'http://localhost:8000/todos'
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_TODOS_DATA":
            return { ...state, todos: action.payload }

        case "EDIT_TODO":
            return { ...state, taskToEdit: action.payload }
        default: return state
    }
}
const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getTodosData = async () => {
        try {
            let { data } = await axios(API)
            dispatch({
                type: "GET_TODOS_DATA",
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    const addTask = (newTask) => {
        try {
            axios.post(API, newTask)
            getTodosData()
        }
        catch (e) {
            console.log(e);
        }
    }
    const changeStatus = async (id) => {
        let { data } = await axios(`${API}/${id}`)
        await axios.patch(`${API}/${id}`, { status: !data.status })
        getTodosData()
    }
    const deleteTask = async (id) => {
        try {
            await axios.delete(`${API}/${id}`)
            getTodosData()
        }
        catch (e) {
            console.log(e);
        }
    }
    const editTodo = async (id) => {
        try {
            let { data } = await axios(`${API}/${id}`)
            dispatch({
                type: "EDIT_TODO",
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const saveTask = async (newTask, history) => {
        await axios.patch(`${API}/${newTask.id}`, newTask)
        history.push('/');
    }
    return (
        <todoContext.Provider
            value={{
                todos: state.todos,
                taskToEdit: state.taskToEdit,
                addTask,
                getTodosData,
                changeStatus,
                deleteTask,
                editTodo,
                saveTask,
            }}>
            {children}
        </todoContext.Provider>
    )
}
export default TodoContextProvider