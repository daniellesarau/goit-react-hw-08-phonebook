import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthentificated: false,
    isLoading: true,
    error: null,
  },

  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuthentificated = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuthentificated = true;
      state.isLoading = false;
      state.error = null;
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logout.fulfilled](state, action) {
      state.user = null;
      state.isAuthentificated = false;
      state.isLoading = false;
      state.error = null;
    },
    [refreshUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuthentificated = true;
      state.isLoading = false;
      state.error = null;
    },
    [refreshUser.rejected](state) {
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const userReducer = userSlice.reducer;
