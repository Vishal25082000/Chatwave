import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCu8PUYwxW9zKvQ95n9tpq__0DFfeQborA",
  authDomain: "chatwave-ef7a9.firebaseapp.com",
  projectId: "chatwave-ef7a9",
  storageBucket: "chatwave-ef7a9.appspot.com",
  messagingSenderId: "467838804258",
  appId: "1:467838804258:web:fe4d199421f3aa33d8857b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
