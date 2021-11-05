import axios from 'axios';
import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

import { API } from '../helpers/const';
// хранилище создается с помощью хука useContext ,Хранилище обяз нужно export
export const mainContext = React.createContext()
const INIT_STATE = {
    products: null,
    product: []
}
// useReucer - это хук который принимает в себе reducer  и INIT_STATE ,Возвращает массив с состоянием хранилища
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return { ...state, products: action.payload }
        case 'GET_PRODUCT':
            return { ...state, product: action.payload }


        default: return state
    }
}

const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async () => {
        try {
            const { data } = await axios(API)
            dispatch({
                type: "GET_PRODUCTS",
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const createProduct = async (product) => {
        try {
            let response = await axios.post(API, product)
            getProducts()
        }
        catch (e) {
            console.log(e);
        }
    }
    const deleteProduct = async (id) => {
        let { data } = await axios.delete(`${API}/${id}`)

        getProducts()
    }
    const getProduct = async (id) => {
        try {
            let { data } = await axios(`${API}/${id}`)
            dispatch({
                type: 'GET_PRODUCT',
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }

    }


    const editProduct = async (id, editedProduct) => {
        await axios.patch(`${API}/${id}`, editedProduct)
    }

    if (editProduct === 'error') {
        return (
            <div>Такого продукта не существует
                <Link to='/'>
                    Вернуться назад
                </Link>
            </div>

        )
    }
    return (
        <mainContext.Provider value={{
            getProducts: getProducts,
            createProduct,
            deleteProduct,
            editProduct,
            getProduct,
            products: state.products,
            product: state.product,


        }} >
            {children}
        </mainContext.Provider>
    );
};

export default MainContextProvider;