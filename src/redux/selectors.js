import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state?.contacts.items;
export const getFilter = state => state.filter;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;
export const getIsAuthenticated = state => state.user.isAuthentificated;
export const getRefresh = state => state.user.isRefresh;

export const getUser = state => state.user.user;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.includes(filter));
  }
);
