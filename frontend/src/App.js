import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the API
  const refreshContacts = () => {
    axios
      .get('http://localhost:8000/api/contacts')
      .then((response) => setContacts(response.data))
      .catch((error) => console.error('Error fetching contacts:', error));
  };

  // Fetch contacts on initial render
  useEffect(() => {
    refreshContacts();
  }, []);

  return (
    <div className='app' style={{ padding:'20px' }}>
      <h1>Contact Management</h1>
      <ContactForm refreshContacts={refreshContacts} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default App;
