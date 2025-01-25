import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../../../contacts.json';
import s from './App.module.css';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const addContact = newContact => {
    setContacts(prevContacts => {
      const isDuplicate = prevContacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );

      if (isDuplicate) {
        alert(`${newContact.name} is already in contacts!`);
        return prevContacts;
      }
      console.log('Form submitted with values:', newContact);
      return [...prevContacts, { id: nanoid(), ...newContact }];
    });
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //const [searchTerm, setSearchTerm] = useState('');
  // const handleSearch = event => {
  //   setSearchTerm(event.target.value.toLowerCase());
  // };
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(searchTerm)
  // );

  const deleteContact = contactId => {
    console.log('Deleted contact:', contactId);
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1 className={s.uppercase}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
