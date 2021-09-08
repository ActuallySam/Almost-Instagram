import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// We want to import the seed files
import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyDib3WMphQfiZqxz2LCfcvV-jqy0Ym4XdY",
    authDomain: "instagram-83c2f.firebaseapp.com",
    projectId: "instagram-83c2f",
    storageBucket: "instagram-83c2f.appspot.com",
    messagingSenderId: "831626873993",
    appId: "1:831626873993:web:696df48bdeb03d55cf0a58",
    measurementId: "G-Q857EL02J8"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// We will call the seed files here (only ONCE!)
seedDatabase(firebase);
console.log('firebase', firebase);

export { firebase, FieldValue };