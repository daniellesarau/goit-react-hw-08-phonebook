import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContact } from '../../redux/operations';
import { Box } from '@mui/material';
// import { UserMenu } from 'components/UserMenu/UserMenu';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Box sx={{ marginTop: '150px' }}>
      {/* <UserMenu> */}
      <ContactForm />
      <Filter />
      <ContactList />
      {/* </UserMenu> */}
    </Box>
  );
}
