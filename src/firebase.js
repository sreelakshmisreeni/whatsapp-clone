// npm i firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClf7-ZmrHu5ScUU2PPU7JIHKn3n_Tol2o",
  authDomain: "whatsapp-clone-5c5ee.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-5c5ee-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-5c5ee",
  storageBucket: "whatsapp-clone-5c5ee.appspot.com",
  messagingSenderId: "411707643464",
  appId: "1:411707643464:web:53befec98c6170b51eaa7d",
  measurementId: "G-HCCSGZPNJE",
};

// ----------------------------------------------------------
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// ----------------------------------------------------------
