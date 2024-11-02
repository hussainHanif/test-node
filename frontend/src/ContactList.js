import React from 'react';
import axios from 'axios';

const ContactList = ({ contacts, setContacts }) => {
  
  // Function to handle contact deletion
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/contacts/${id}`)
      .then(() => {
        // Update the contacts list after successful deletion
        setContacts(contacts.filter((contact) => contact.id !== id));
      })
      .catch((error) => console.error('Error deleting contact:', error));
  };

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.description}
            <button onClick={() => handleDelete(contact.id)} style={{marginLeft: "10px", color: "red"}}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
