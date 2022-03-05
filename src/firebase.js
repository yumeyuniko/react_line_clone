import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
require('dotenv').config();


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAyXpC5zdVYYn5Hd6oLY_Ejdxy6_Vv64tk",
  authDomain: "line-clone-e1c31.firebaseapp.com",
  projectId: "line-clone-e1c31",
  storageBucket: "line-clone-e1c31.appspot.com",
  messagingSenderId: "953919229367",
  appId: "1:953919229367:web:3b8658f54e3547ce8dec32"
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
