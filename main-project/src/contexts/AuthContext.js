import React, { useEffect, useReducer } from 'react';
import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import { auth } from '../FireBase';
import axios from 'axios';
import { USER_API } from '../helpers/const';
import { LocalHospital } from '@mui/icons-material';
export const authContext = React.createContext()
const INIT_STATE = {
    user: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload }
        default: return state
    }
}
const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    // ! AUTH WITH GOOGLE
    const googleProvider = new GoogleAuthProvider()
    const authWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, googleProvider)
            // console.log(response)
            addUserToJson(response.user.email)
        }
        catch (e) {
            console.log(e);
        }
    }
    // ! проверка на то что пользователь в системе или нет
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            let action = {
                type: "SET_USER",
                payload: user
            }
            dispatch(action)

        })
    }, [])
    async function addUserToJson(email) {
        try {
            let myUser = { username: email }
            let { data } = await axios(USER_API)
            let result = data.filter(item => {
                return item.username === email
            })
            localStorage.setItem('users', JSON.stringify(myUser))
            if (result.length === 0) {
                await axios.post(USER_API, myUser)
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    // console.log(state.user);

    //  ! Выйти из системы
    const logOut = async () => {
        try {
            await signOut(auth)
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <authContext.Provider value={{
            addUserToJson,
            authWithGoogle: authWithGoogle,
            logOut,
            user: state.user
        }} >
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;