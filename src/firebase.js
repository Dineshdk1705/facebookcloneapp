// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDC_azSY6fJ72y0ED2XHnjitG6mqtSRjFw",
    authDomain: "facebook-clone-app-27031.firebaseapp.com",
    projectId: "facebook-clone-app-27031",
    storageBucket: "facebook-clone-app-27031.appspot.com",
    messagingSenderId: "100673747724",
    appId: "1:100673747724:web:5ed528f4b6d6c2748a2729",
    measurementId: "G-N7SD3ZETNG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;