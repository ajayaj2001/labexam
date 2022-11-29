// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-FUQvSPbe6ctfG5RpZqEOUEqY6bsJ3Q8',
  authDomain: 'labexam-12228.firebaseapp.com',
  databaseURL: 'https://labexam-12228-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'labexam-12228',
  storageBucket: 'labexam-12228.appspot.com',
  messagingSenderId: '1084858543899',
  appId: '1:1084858543899:web:8473d26a44d0d6377d6dbe',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
