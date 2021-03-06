import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP6yTnTyvf3fcjK1eFVts0XGvXJ1yssAY",
  authDomain: "my-full-stack-projects.firebaseapp.com",
  projectId: "my-full-stack-projects",
  storageBucket: "my-full-stack-projects.appspot.com",
  messagingSenderId: "1038605645550",
  appId: "1:1038605645550:web:c09dbcc7c5d48959b525ff",
  measurementId: "G-FR7N9PS85E",
};

//   init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
