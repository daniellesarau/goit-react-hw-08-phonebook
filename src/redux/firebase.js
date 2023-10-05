import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDvOdfuminnM2mXpbj1sIT_yjXPj_366LY',
  authDomain: 'phonebook-b7ddd.firebaseapp.com',
  projectId: 'phonebook-b7ddd',
  storageBucket: 'phonebook-b7ddd.appspot.com',
  messagingSenderId: '635539115890',
  appId: '1:635539115890:web:8d09cf27dc4cbf23ae17eb',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
