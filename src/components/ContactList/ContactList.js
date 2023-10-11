import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getIsLoading, getFilteredContacts } from 'redux/selectors';

import {
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
} from '@mui/material';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <List
        sx={{
          maxWidth: '600px',
          mt: 4,
          mx: 'auto',
        }}
      >
        {isLoading && <CircularProgress />}
        {!isLoading &&
          contacts?.map(({ id, name, number }, index) => (
            <ListItem
              key={id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <ListItemText
                primary={`${index + 1}. ${name} : ${number}`}
                sx={{ flex: '1' }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(deleteContact(id))}
                sx={{ ml: 2 }}
              >
                Delete
              </Button>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default ContactList;
