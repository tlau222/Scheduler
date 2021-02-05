import * as firebase from 'firebase';
import 'firebase/auth';

import "firebase/database";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyA1-47Ew9uOahRnd3NgB8x6KvIH1Hi2-Hw",
    authDomain: "cs394-scheduler-d975d.firebaseapp.com",
    databaseURL: "https://cs394-scheduler-d975d-default-rtdb.firebaseio.com",
    projectId: "cs394-scheduler-d975d",
    storageBucket: "cs394-scheduler-d975d.appspot.com",
    messagingSenderId: "893610825875",
    appId: "1:893610825875:web:d8d4bb8f0345048d1ad566",
    measurementId: "G-S8J7WBG6CV"
};

firebase.initializeApp(firebaseConfig);

export { firebase };