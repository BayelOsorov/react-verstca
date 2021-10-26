
import './App.css';

import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';
import AddContact from './components/AddContact/AddContact';
import ContactCard from './components/ContactCard/ContactCard';

function App() {
  let [contacts, setContacts] = useState([])
  let [editContact, setEditContact] = useState({})
  let [isEdit, setIsEdit] = useState(false)
  function handleNewContact(newContact) {
    let newContactsArr = [...contacts]
    newContactsArr.push(newContact)
    setContacts(newContactsArr)
  }
  function handleDeleteContact(id) {
    let newContactsArr = contacts.filter((item) => {
      return item.id !== id
    })
    setContacts(newContactsArr)
  }
  function handleEditIndex(index) {
    setIsEdit(true)
    setEditContact(contacts[index]);
  }
  function handleSavedEditedContact(newContact) {
    let newContactsArr = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact
      } return item
    })
    setContacts(newContactsArr)
    setIsEdit(false)
  }
  return (
    <>
      <AddContact
        handleNewContact={handleNewContact} />
      {isEdit ? <ContactCard editContact={editContact}
        handleSavedEditedContact={handleSavedEditedContact} /> : null}

      <ContactList contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </>
  );
}

export default App;
