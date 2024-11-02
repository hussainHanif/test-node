const express = require('express');
const router = express.Router();

// In-memory storage for mock data
let contacts = [];
let idCounter = 1;

// GET /api/contacts - Get all contacts
router.get('/contacts', (req, res) => {
  res.json(contacts);
});

// POST /api/contacts - Add a new contact
router.post('/contacts', (req, res) => {
  const { name, description } = req.body;
  const newContact = { id: idCounter++, name, description };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// PUT /api/contacts/:id - Update a contact
router.put('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const contact = contacts.find((c) => c.id == id);

  if (contact) {
    contact.name = name || contact.name;
    contact.description = description || contact.description;
    res.json(contact);
  } else {
    res.status(404).json({ error: 'Contact not found' });
  }
});

// DELETE /api/contacts/:id - Delete a contact
router.delete('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const index = contacts.findIndex((c) => c.id == id);

  if (index !== -1) {
    contacts.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Contact not found' });
  }
});

module.exports = router;

