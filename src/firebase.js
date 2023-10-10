import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUvesoOPZuTJLmpfqTwxR4NDLSwlgGG0Q",
    authDomain: "clone-9b915.firebaseapp.com",
    projectId: "clone-9b915",
    storageBucket: "clone-9b915.appspot.com",
    messagingSenderId: "105215867280",
    appId: "1:105215867280:web:cd5a8438a117acf001db15",
    measurementId: "G-G0M9HJB6G8"
  });      

 
  const auth = firebase.auth();

  export  {auth};