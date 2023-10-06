import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        mt: 10,
        mx: 'auto',
      }}
    >
      <TextField
        label="Find contacts by name"
        type="text"
        value={filterValue}
        onChange={handleInputChange}
        fullWidth
      />
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
