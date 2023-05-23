import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBTpttOJfPgV6sE4UZ5VV4RC2Fl3S5uyI",
    authDomain: "chat-7c1fe.firebaseapp.com",
    projectId: "chat-7c1fe",
    storageBucket: "chat-7c1fe.appspot.com",
    messagingSenderId: "35038624664",
    appId: "1:35038624664:web:3690c12bb9b7fdb6f009ed"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()