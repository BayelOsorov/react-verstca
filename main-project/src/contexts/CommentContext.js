
import axios from 'axios';
import React, { useReducer } from 'react';
import { COMMENTS_API } from '../helpers/const';

export const commentContext = React.createContext()
const INIT_STATE = {
    comments: null,
    comment: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_COMM':
            return { ...state, comments: action.payload }
        case 'GET_COMM_BY_ID':
            return { ...state, comment: action.payload }
        default: return state
    }
}

const CommentContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const addComment = async (text, owner, phoneId, time, timeSeconds) => {
        try {
            let comment = {
                text,
                owner,
                phoneId,
                time,
                timeSeconds,
            }
            await axios.post(COMMENTS_API, comment)
            getComment(phoneId)
        }
        catch (e) {
            console.log(e);
        }
    }
    const getComment = async (phoneId) => {
        try {
            const { data } = await axios(`${COMMENTS_API}/?phoneId=${phoneId}`)
            dispatch({
                type: 'GET_COMM',
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const deleteComment = async (id, phoneId) => {
        try {
            await axios.delete(`${COMMENTS_API}/${id}`)
            getComment(phoneId)
        }
        catch (e) {
            console.log(e);
        }
    }
    const getCommentById = async (id) => {
        try {
            const { data } = await axios(`${COMMENTS_API}/${id}`)
            dispatch({
                type: 'GET_COMM_BY_ID',
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const editComment = async (editedComm) => {
        try {
            let newComm = {
                ...state.comment,
                text: editedComm
            }
            await axios.patch(`${COMMENTS_API}/${newComm.id}`, newComm)
            getComment(newComm.phoneId)
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <commentContext.Provider
            value={{
                addComment,
                getComment,
                deleteComment,
                getCommentById,
                editComment,
                comments: state.comments,
                comment: state.comment

            }}
        >
            {children}
        </commentContext.Provider>
    );
};

export default CommentContextProvider;