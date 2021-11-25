import { Rating } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { likesContext } from '../contexts/LikesContext';

const Likes = () => {
    const { addLike, getLikes, likes, like, getLikeById, changeLikes } = useContext(likesContext)
    let params = useParams()
    useEffect(() => {
        getLikes(params.id)
    }, [])
    const [inpVal, setInpVal] = useState(like ? like.rate : 0)
    let user = JSON.parse(localStorage.getItem('users'))
    let tl
    const addlikeToPhone = (e) => {
        let value = e.target.value
        setInpVal(value)
        if (likes) {
            let tempId, tempObj = false
            likes.forEach(item => {
                if (item.owner === user.username) {
                    tempObj = true
                    tempId = item.id
                    tl = item.rate
                }


            })
            if (!tempObj) {
                let newLike = {
                    owner: user.username,
                    rate: value,
                    phoneId: params.id
                }
                addLike(newLike)
            } else {
                changeLikes(user.username, value, params.id, tempId)
            }
        }

    }
    return (
        <div>
            <Rating
                name="simple-controlled"
                value={tl}
                onChange={addlikeToPhone}
            />

        </div>
    );
};

export default Likes;