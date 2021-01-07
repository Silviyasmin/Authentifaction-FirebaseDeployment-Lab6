import firebase from 'firebase/app'
import "firebase/auth";

const app =  firebase.initializeApp({
  apiKey: "AIzaSyC5DuHyOYsulODX1e4cY-BQ7sCJLxqtuOE",
  authDomain: "fir-auth-development-e8a4d.firebaseapp.com",
  projectId: "fir-auth-development-e8a4d",
  storageBucket: "fir-auth-development-e8a4d.appspot.com",
  messagingSenderId: "760467894187",
  appId: "1:760467894187:web:4fca19cad7f4ffd67decee"
  });

const auth = app.auth();
export {auth};
export default app;