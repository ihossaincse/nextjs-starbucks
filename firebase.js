import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDi3rD1Vq6KwHQ67QE7HulAdxByEPhO4Y0",
  authDomain: "nextjs-starbucks.firebaseapp.com",
  projectId: "nextjs-starbucks",
  storageBucket: "nextjs-starbucks.appspot.com",
  messagingSenderId: "580301326860",
  appId: "1:580301326860:web:9a3dfda007d4fe032cbc29"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

