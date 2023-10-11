import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  collection,
  getDoc,
  addDoc,
  deleteDoc,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { auth } from './firebase';
import { db } from './firebase';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      //
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;

      const userDocRef = doc(db, 'users', userId);
      const contactsCollectionRef = collection(userDocRef, 'contacts');
      const documentsContacts = await getDocs(contactsCollectionRef);

      const contactsData = [];
      documentsContacts.forEach(doc => {
        const contactData = doc.data();
        contactsData.push({ ...contactData, id: doc.id });
      });

      return contactsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;
      // console.log(userId);
      const userDocRef = doc(db, 'users', userId);
      const contactsCollectionRef = collection(userDocRef, 'contacts');
      const docRef = await addDoc(contactsCollectionRef, { ...contact });
      const addedData = (await getDoc(docRef)).data();
      console.log({ id: docRef.id, ...addedData });
      return { id: docRef.id, ...addedData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (contactId, thunkAPI) => {
    const currState = thunkAPI.getState();
    const userId = currState.user.user.uid;

    const userDocRef = doc(db, 'users', userId);
    const contactsCollectionRef = collection(userDocRef, 'contacts');
    const contactDocRef = doc(contactsCollectionRef, contactId);

    await deleteDoc(contactDocRef);

    return contactId;
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
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

    return response.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refreshUser',
  async (_, thunkAPI) => {
    try {
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;
      const updatedUserData = await updateDoc(userId);
      return updatedUserData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
