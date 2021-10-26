import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css'

const AddContact = (props) => {
    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')
    let [img, setImg] = useState('')


    function handleClick() {
        let newContact = {
            name,
            phone,
            img,
            id: Date.now()
        }
        props.handleNewContact(newContact)
        setName('')
        setPhone('')
        setImg('')

    }
    return (
        <div className='  content'>

            <Form.Control
                style={{ width: 400 }}
                value={name} onChange={(e) => setName(e.target.value)}
                type="text" placeholder="Name" />
            <br />
            <Form.Control
                style={{ width: 400 }}
                value={phone} onChange={(e) => setPhone(e.target.value)}
                type="number" placeholder="Phone" />
            <br />
            <Form.Control
                style={{ width: 400 }} s
                value={img} onChange={(e) => setImg(e.target.value)}
                type="text" placeholder="img URL" />
            <br />
            <Button className='btn-1' onClick={handleClick}>Add Contact</Button>

        </div>
    );
};

export default AddContact;