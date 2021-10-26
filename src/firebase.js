import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMEwIFQl7jUmQpp87KE9iuBaLxufOFygQ",
  authDomain: "clone-6df3d.firebaseapp.com",
  projectId: "clone-6df3d",
  storageBucket: "clone-6df3d.appspot.com",
  messagingSenderId: "27309020163",
  appId: "1:27309020163:web:2f12ec601d78244bdeea36",
  measurementId: "G-BD14YHELW4",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
