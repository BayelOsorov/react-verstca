import { Button, FormControl, Input, InputBase } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { commentContext } from '../contexts/CommentContext';
import { timeSince } from '../helpers/calcTimeAgo';

const Comments = () => {
    const { addComment, getComment, comments, deleteComment, editComment, comment, getCommentById } = useContext(commentContext)
    const [val, setVal] = useState('')
    const [newEditComm, setNewEditComm] = useState('')
    let params = useParams()
    let user = JSON.parse(localStorage.getItem('users'))
    useEffect(() => {
        getComment(params.id)
    }, [])
    const creatingComment = () => {
        let time = new Date().toLocaleDateString();
        let timeSeconds = Date.now()//.toLocaleTimeString();
        addComment(val, user.username, params.id, time, timeSeconds)
        setVal('')
    }
    function deleteCommentTemp(id, phoneId) {
        deleteComment(id, phoneId)
    }
    const handleChangeEdit = (e) => {
        setVal(e.target.value)

    }
    const [bool, setBool] = useState(false)
    const [checkid, setCheckid] = useState()
    let [bool2, setBool2] = useState(true)
    const editComm = (id) => {
        setBool(true)
        setCheckid(id)
    }
    const changeEditedComm = (e) => {
        setNewEditComm(e.target.value)
    }
    const saveEditedComm = () => {
        editComment(newEditComm)
        setBool(false)
        setBool2(true)
        getComment(params.id)
    }
    return (
        <>
            <Input
                onChange={handleChangeEdit}
                value={val}
            >

            </Input>
            <Button style={{ backgroundColor: '#31B8BF', border: 'none' }} onClick={creatingComment}>
                Отправить
            </Button>
            <div >
                {
                    comments ? (
                        comments.length > 0 ? (

                            comments.sort((a, b) => b.timeSeconds - a.timeSeconds).map((item) => (
                                <div key={item.id}>
                                    <strong style={{ width: '100px', height: '100px', backgroundColor: 'blue', color: 'white' }}>{item.owner}</strong>
                                    {/* <span> {item.time}, {' '}
                                {timeSince(item.timeSeconds)} назад </span> */}
                                    {

                                        bool && checkid === item.id ? (
                                            <>
                                                <input
                                                    value={newEditComm}
                                                    onChange={changeEditedComm}
                                                />
                                                <Button onClick={() => saveEditedComm()} >Save</Button>
                                            </>
                                        ) : (<p>{item.text}</p>)
                                    }

                                    {
                                        item.owner === user.username ? (
                                            bool2 ? (
                                                <>
                                                    <Button onClick={() => {
                                                        setNewEditComm(item.text)
                                                        getCommentById(item.id)
                                                        editComm(item.id)
                                                        setBool2(false)
                                                    }} >Edit</Button>
                                                    <Button
                                                        onClick={() => {

                                                            deleteCommentTemp(item.id, item.phoneId)
                                                        }}
                                                    >Delete</Button>
                                                </>) : (

                                                <></>
                                            )
                                        ) : (
                                            <></>
                                        )

                                    }
                                    < br />
                                </div>
                            ))



                        ) : (
                            <h2>This post has't comments</h2>
                        )
                    ) : <h2>Loading</h2>
                }
            </div>
        </>
    );
};

export default Comments;