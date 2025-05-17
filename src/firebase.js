
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATIPDdUsSGEZI1tAItyEjOXh6GgZStbX8",
  authDomain: "sarooom-4e732.firebaseapp.com",
  projectId: "sarooom-4e732",
  storageBucket: "sarooom-4e732.appspot.com",
  messagingSenderId: "367375525181",
  appId: "1:367375525181:web:6ca5ece64cfd39a11e9154",
  measurementId: "G-JXTQGCJYJR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
