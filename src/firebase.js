import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYYCE9403bHd8fhnMN66BB2ZyMR7v5utw",
    authDomain: "pepper-reminder.firebaseapp.com",
    projectId: "pepper-reminder",
    storageBucket: "pepper-reminder.appspot.com",
    messagingSenderId: "168151571543",
    appId: "1:168151571543:web:bcd352fa9df1443b3cd712"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth  = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider, db};
export default firebaseApp;
