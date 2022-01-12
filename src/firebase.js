// npm i firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmB_PJFQRDGtdT9oV4ecXVHbqnanp9UbQ",
  authDomain: "whatsapp-clone-4f188.firebaseapp.com",
  projectId: "whatsapp-clone-4f188",
  storageBucket: "whatsapp-clone-4f188.appspot.com",
  messagingSenderId: "618269431538",
  appId: "1:618269431538:web:1dc84f6df32cf15a07e26b",
  measurementId: "G-LWTVD6M9W0"
};

// ----------------------------------------------------------
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// ----------------------------------------------------------
