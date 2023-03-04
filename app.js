const { contactsController } = require('./controllers');

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

// GET /constacts
app.get('/contacts/', contactsController.getContacts);

// POST /contacts
app.post('/contacts', contactsController.createContact);

// GET /contacts/5
app.get('/contacts/:id', contactsController.getContactById);

module.exports = app;