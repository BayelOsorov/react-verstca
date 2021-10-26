import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';



const ContactCard = (props) => {
    let [name, setName] = useState(props.editContact.name)
    let [phone, setPhone] = useState(props.editContact.phone)
    let [img, setImg] = useState(props.editContact.img)


    function handleSaveClick() {
        let contact = { ...props.editContact }
        contact.name = name
        contact.phone = phone
        contact.img = img

        props.handleSavedEditedContact(contact)
        setName('')
        setPhone('')
        setImg('')

    }
    return (
        <div className=' content'>

            <Form.Control
                style={{ border: '1px solid black', width: 400 }}
                value={name} onChange={(e) => setName(e.target.value)}
                type="text" placeholder="Name" />
            <br />
            <Form.Control
                style={{ border: '1px solid black', width: 400 }}
                value={phone} onChange={(e) => setPhone(e.target.value)}
                type="number" placeholder="Phone" />
            <br />
            <Form.Control
                style={{ border: '1px solid black', width: 400 }}
                value={img} onChange={(e) => setImg(e.target.value)}
                type="text" placeholder="Img" />
            <br />
            <Button className='btn-1' variant="success" onClick={handleSaveClick}>Save Contact</Button>

        </div>
    );
};

export default ContactCard;