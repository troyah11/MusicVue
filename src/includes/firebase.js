import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZQ4Az-SEiQJmKCBgTnWhdIUGrVasDY6U",
  authDomain: "music-39294.firebaseapp.com",
  projectId: "music-39294",
  storageBucket: "music-39294.appspot.com",
  messagingSenderId: "646997265367",
  appId: "1:646997265367:web:9f7787b94a46f462041992",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");

export { auth, db, usersCollection, storage, songsCollection };
