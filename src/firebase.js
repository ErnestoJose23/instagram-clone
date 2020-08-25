import firebase from "firebase";


const firebaseApp = firebase.initializeApp((
    apiKey: "AIzaSyDzgWN9GWcnm07GNfHzK-aYE1WkG9RAFmQ",
    authDomain: "instagram-clone-af4ef.firebaseapp.com",
    databaseURL: "https://instagram-clone-af4ef.firebaseio.com",
    projectId: "instagram-clone-af4ef",
    storageBucket: "instagram-clone-af4ef.appspot.com",
    messagingSenderId: "331766022431",
    appId: "1:331766022431:web:2291ed2c222e0231bff02a",
));

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export  {db, auth, storage};
