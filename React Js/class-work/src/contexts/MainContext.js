import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';

export const mainContext = React.createContext()
const INIT_STATE = {
    countries: [],
    countryToEdit: null,
}
let API = 'http://localhost:8000/countrees'
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET COUNTRIES": return { ...state, countries: action.payload }
        case "GET_COUNTRY_TO_EDIT": return { ...state, countryToEdit: action.payload }
        default:
            return state
    }
}
const MainContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const getData = () => {
        console.log('Hello');
    }

    //  ! POST
    const addCountry = async (country) => {
        try {
            await axios.post(API, country)
            getData()
        }
        catch (e) {
            console.log(e);
        }
    }

    const getCountry = async () => {
        try {
            const response = await axios(API)
            dispatch({
                type: "GET COUNTRIES",
                payload: response.data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    const getCountryToEdit = async (id) => {
        try {
            const response = await axios(`${API}/${id}`)
            dispatch({
                type: "GET_COUNTRY_TO_EDIT",
                payload: response.data

            }
            )
        }
        catch (e) {

        }
    }
    const saveEditedCountry = async (country) => {
        try {
            await axios.patch(`${API}/${country.id}`, country)
            getCountry()
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <mainContext.Provider value={{
            getData,
            addCountry: addCountry,
            getCountry,
            getCountryToEdit: getCountryToEdit,
            saveEditedCountry,
            countryToEdit: state.countryToEdit,
            countries: state.countries
        }}>  {props.children}</mainContext.Provider>

    );
};

export default MainContextProvider;