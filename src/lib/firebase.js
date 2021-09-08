import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";

// We want to import the seed files
// import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyAjVvHD47eXaqLBF9s_bXCFAONtHhKH1Y8",
    authDomain: "instagram-3740d.firebaseapp.com",
    projectId: "instagram-3740d",
    storageBucket: "instagram-3740d.appspot.com",
    messagingSenderId: "920342165105",
    appId: "1:920342165105:web:a1334dafeac1133e8b0dd0"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// const analytics = getAnalytics(app);

// We will call the seed files here (only ONCE!)
// seedDatabase(firebase);
// console.log('firebase', firebase);

export { firebase, FieldValue };