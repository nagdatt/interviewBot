// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3RjhJcAm-90gG-RAeLSt2rC1M1LNu_vQ",
  authDomain: "interviewbot-e6b18.firebaseapp.com",
  projectId: "interviewbot-e6b18",
  storageBucket: "interviewbot-e6b18.appspot.com",
  messagingSenderId: "266906630154",
  appId: "1:266906630154:web:1e72d793ca7b87302907f3"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export {  db };
  
