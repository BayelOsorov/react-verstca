
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { CalcSubPrice, calcTotalPrice } from '../helpers/CalcPrice';
import { API } from '../helpers/const';

export const clientContext = React.createContext()
const INIT_STATE = {
    phones: null,
    phoneDetails: null,
    phonesCountInCart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).phones.length : 0,
    cart: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PHONES":
            return { ...state, phones: action.payload }
        case "GET_DETAIL":
            return { ...state, phoneDetails: action.payload }
        case 'ADD_AND_DELETE_CART':
            return { ...state, phonesCountInCart: action.payload }
        case "GET_CART":
            return { ...state, cart: action.payload }
        default: return state
    }
}
const ClientContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getPhones = async () => {
        try {
            let filter = (window.location.search);
            const { data } = await axios(`${API}${filter}`)
            dispatch({
                type: "GET_PHONES",
                payload: data
            })
            resetCurrPage()
        }
        catch (e) {
            console.log(e);
        }
    }
    const getDetails = async (id) => {
        const { data } = await axios(`${API}/${id}`)
        dispatch({
            type: "GET_DETAIL",
            payload: data
        })
    }

    // ! pagination

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

    useEffect(() => {
        if (state.phones) {
            const data = state.phones
            setPosts(data);
        }
    }, [state.phones])
    const numberOfLastPost = currentPage * postsPerPage;
    const numberOfFirstPost = numberOfLastPost - postsPerPage;
    const currentPosts = posts.slice(numberOfFirstPost, numberOfLastPost)
    const totalPosts = posts.length

    const handlePage = (newPage) => {
        setCurrentPage(newPage)
    }
    function resetCurrPage() {
        setCurrentPage(1)
    }
    //  ! Корзина
    const addAndDeletePhoneInCart = (phone) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                phones: [],
                totalPrice: 0,
            }
        }
        let product = {
            phone: phone,
            count: 1,
            subPrice: 0
        }
        product.subPrice = CalcSubPrice(product)
        let checkArr = cart.phones.filter((item) => {
            return item.phone.id === phone.id
        })
        if (checkArr.length === 0) {
            cart.phones.push(product)
        }
        else {
            cart.phones = cart.phones.filter((item) => {
                return item.phone.id !== phone.id
            })
        }
        cart.totalPrice = calcTotalPrice(cart)
        localStorage.setItem('cart', JSON.stringify(cart))

        let action = {
            type: 'ADD_AND_DELETE_CART',
            payload: cart.phones.length
        }
        dispatch(action)
    }
    const checkPhoneInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                phones: [],
                totalPrice: 0
            }
        }
        let checkArr = cart.phones.filter((item) => {
            return item.phone.id === id
        })
        if (checkArr.length === 0) {
            return false
        }
        else {
            return true
        }
    }
    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }
    const changeCountPhone = (count, id) => {
        if (count < 1) {
            return
        }
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                phones: [],
                totalPrice: 0
            }
        }
        cart.phones = cart.phones.map((item) => {
            if (item.phone.id === id) {
                item.count = count
                item.subPrice = CalcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart)
        localStorage.setItem('cart', JSON.stringify(cart))

        getCart()
    }
    return (
        <clientContext.Provider value={{
            getPhones,
            getDetails,
            handlePage,
            addAndDeletePhoneInCart,
            checkPhoneInCart,
            getCart,
            changeCountPhone,
            phones: state.phones,
            phoneDetails: state.phoneDetails,
            totalPosts: totalPosts,
            currentPosts: currentPosts,
            postsPerPage: postsPerPage,
            currentPage,
            phonesCountInCart: state.phonesCountInCart,
            cart: state.cart
        }} >
            {props.children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;