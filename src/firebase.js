// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAuVYHNqp8Sx7O3EmQ7hPhu5NjLu8KL87M",
    authDomain: "facebook-clone-6c668.firebaseapp.com",
    projectId: "facebook-clone-6c668",
    storageBucket: "facebook-clone-6c668.appspot.com",
    messagingSenderId: "77580655462",
    appId: "1:77580655462:web:1453c0a285918a96f006a7",
    measurementId: "G-SZJE5SPS3J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();


export default db;