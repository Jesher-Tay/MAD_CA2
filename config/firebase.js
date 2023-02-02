import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import Constants from 'expo-constants';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: Constants?.manifest?.extra?.firebaseApiKey,
    authDomain: Constants?.manifest?.extra?.firebaseAuthDomain,
    databaseURL: "https://mad-ca3-54f72-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: Constants?.manifest?.extra?.firebaseProjectId,
    storageBucket: Constants?.manifest?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants?.manifest?.extra?.firebaseMessagingSenderId,
    appId: Constants?.manifest?.extra?.firebaseAppId,
    measurementId: "G-M1VNLFGXVE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export {
    app,
    auth,
    db,
    storage,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}
