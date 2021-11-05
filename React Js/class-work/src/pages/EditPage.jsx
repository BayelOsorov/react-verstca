import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useParams, useHistory } from 'react-router-dom';
import { mainContext } from '../contexts/MainContext';

const EditPage = () => {
    const { getCountryToEdit, countryToEdit, saveEditedCountry } = useContext(mainContext)
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        getCountryToEdit(id)
    }, [])

    const [editCountry, setEditCountryToEdit] = useState(countryToEdit)

    useEffect(() => {
        setEditCountryToEdit(countryToEdit)
    }, [countryToEdit])

    function handleChange(e) {
        let country = {
            ...editCountry,
            [e.target.name]: e.target.value
        }
        setEditCountryToEdit(country)
    }
    function handleSubmit(e) {
        e.preventDefault()
        saveEditedCountry(editCountry)
        history.push('/')
    }


    return (
        <div>
            <Link to='/'  >
                <Button>To Main page</Button>
            </Link>
            {
                editCountry ? (<Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Country name</Form.Label>
                        <Form.Control value={editCountry.name} onChange={handleChange} name="name" type="text" placeholder="enter country name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Country capital</Form.Label>
                        <Form.Control value={editCountry.capital} onChange={handleChange} name="capital" type="text" placeholder="enter country capital" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Country population</Form.Label>
                        <Form.Control value={editCountry.population} onChange={handleChange} name="population" type="number" placeholder="enter country population" />
                    </Form.Group>

                    <Button onSubmit={handleSubmit} type="submit">Save changes</Button>
                    <Button variant='danger' onSubmit={handleSubmit} >Delete</Button>

                </Form>) : (
                    <h2>Loading</h2>
                )
            }

        </div>
    );
};

export default EditPage;