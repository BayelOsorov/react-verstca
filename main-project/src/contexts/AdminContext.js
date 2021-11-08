import { TrySharp } from '@mui/icons-material';
import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../helpers/const';

export const adminContext = React.createContext()
const INIT_STATE = {
    phones: null,
    phoneToEdit: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PHONES":
            return { ...state, phones: action.payload }
        case 'GET_PHONE_TO_EDIT':
            return { ...state, phoneToEdit: action.payload }
        default: return state
    }
}
const AdminContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const addPhone = async (phone) => {
        try {
            const { data } = await axios.post(API, phone)
            getPhones()
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    }
    const getPhones = async () => {
        try {
            let { data } = await axios(API)
            dispatch({
                type: 'GET_PHONES',
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    // !UPDATE
    const getPhoneToEdit = async (id) => {
        try {
            const { data } = await axios(`${API}/${id}`)
            dispatch({
                type: 'GET_PHONE_TO_EDIT',
                payload: data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    const saveEditedPhone = async (editedPhone) => {
        try {
            const { data } = await axios.patch(`${API}/${editedPhone.id}`, editedPhone)
            getPhones()
        }
        catch (e) {
            console.log(e);
        }
    }

    const deletePhone = async (id) => {
        try {
            await axios.delete(`${API}/${id}`)
            getPhones()
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <adminContext.Provider
            value={{
                addPhone,
                getPhones,
                getPhoneToEdit,
                saveEditedPhone,
                deletePhone,
                phones: state.phones,
                phoneToEdit: state.phoneToEdit
            }}
        >
            {props.children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;