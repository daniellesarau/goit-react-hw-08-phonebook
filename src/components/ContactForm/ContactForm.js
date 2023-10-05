import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function ContactForm() {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = e => {
    setContact(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const queryMatch = contacts.find(
      ({ name }) =>
        contact.name && contact.name.toLowerCase() === name.toLowerCase()
    );

    if (queryMatch) {
      alert(`"${contact.name}" is already in contacts.`);
      return;
    } else {
      dispatch(addContact({ id, name: contact.name, number: contact.number }));
    }

    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mt: 5,
          mb: 3,
          textAlign: 'center',
          fontWeight: 700,
        }}
      >
        Add contacts
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <TextField
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contact.name}
          onChange={handleInputChange}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          label="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={contact.number}
          onChange={handleInputChange}
          sx={{ marginBottom: '1rem' }}
        />
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </Box>
    </>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
