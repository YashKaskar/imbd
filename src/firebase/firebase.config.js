import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCTXZ4IxRJCFs6AcNsXCyc5FRJyO-MqQd4",
    authDomain: "imdb-44d06.firebaseapp.com",
    databaseURL: "https://imdb-44d06-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "imdb-44d06",
    storageBucket: "imdb-44d06.appspot.com",
    messagingSenderId: "672332837331",
    appId: "1:672332837331:web:46bef281d905ba71897f26"
};
  
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage}