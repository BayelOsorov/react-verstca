import { ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import { Button, Rating } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import Likes from '../components/Likes';
import { clientContext } from '../contexts/ClientContext';
import { likesContext } from '../contexts/LikesContext';

const DetailPage = () => {
    const { getDetails, phoneDetails } = useContext(clientContext)
    const { getLikes, likes } = useContext(likesContext)

    const params = useParams()
    useEffect(() => {
        getDetails(params.id)
        getLikes(params.id)
    }, [])

    return (

        <div>

            {
                phoneDetails ? (
                    <div className='detail-page'>
                        <div className='detail-image'>
                            <img width='50%' src={phoneDetails.image} />
                        </div>
                        <div>                        <h2>{phoneDetails.name}</h2>
                            <Rating name="read-only" readOnly />
                            <p>{phoneDetails.description}</p>
                            <Button variant='contained'  >Добавить в корзину</Button>

                            <div className='detail-text' >
                                <h4>Характеристики</h4>
                                <ul className='character' >
                                    <li>
                                        <strong>Цена: </strong>
                                        <span>{phoneDetails.price} </span>
                                    </li>

                                    <li>
                                        <strong>Цвет: </strong>
                                        <span>{phoneDetails.color} </span>
                                    </li>

                                    <li>
                                        <strong>Бренд: </strong>
                                        <span>{phoneDetails.brand} </span>
                                    </li>

                                    <li>
                                        <strong>Модель: </strong>
                                        <span>{phoneDetails.model} </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                ) : (
                    <h2>Loading...</h2>
                )
            }
            <Likes />
            <Comments />
        </div>
    );
};

export default DetailPage;