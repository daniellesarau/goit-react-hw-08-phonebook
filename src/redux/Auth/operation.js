import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './firebase';

export const register = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(response.user);
      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('user/login', async (user, thunkAPI) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    console.log(response.user);
    return response.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
