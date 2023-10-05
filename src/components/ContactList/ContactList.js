import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getIsLoading, getFilteredContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
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
          mt: 10,
          mx: 'auto',
        }}
      >
        {isLoading && <CircularProgress />}
        {!isLoading &&
          contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              <ListItemText primary={`${name} : ${number}`} />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </Button>
            </ListItem>
          ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
