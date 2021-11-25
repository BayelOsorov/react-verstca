import axios from 'axios';
import React, { useReducer } from 'react';
import { LIKES_API } from '../helpers/const';
export const likesContext = React.createContext()
const INIT_STATE = {
    likes: null,
    like: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_LIKES":
            return { ...state, likes: action.payload }
        case 'GET_LIKE_BY_ID':
            return { ...state, like: action.payload }
        default: return state
    }
}
const LikesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const addLike = async (like) => {
        try {
            await axios.post(LIKES_API, like)

        } catch (e) {
            console.log(e)
        }
    }
    const getLikes = async (phonesId) => {
        const { data } = await axios(`${LIKES_API}/?phonesId/${phonesId}`)
        dispatch({
            type: "GET_LIKES",
            payload: data
        })
    }
    const getLikeById = async (id) => {
        try {
            const { data } = await axios(`${LIKES_API}/${id}`)
            dispatch({
                type: 'GET_LIKE_BY_ID',
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const changeLikes = async (user, rate, phoneId, id) => {
        try {
            let newLike = {
                owner: user,
                rate,
                phoneId,
            }
            console.log(newLike)
            await axios.patch(`${LIKES_API}/${id}`, newLike)
            getLikes(newLike.phoneId)

        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <likesContext.Provider value={{
            addLike,
            getLikes,
            getLikeById,
            changeLikes,
            likes: state.likes,
            like: state.like
        }}>
            {children}
        </likesContext.Provider>
    );
};

export default LikesContextProvider;