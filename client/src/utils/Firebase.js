import {initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore/lite';

const app = initializeApp({
    apiKey: "AIzaSyB6mllUCElI2z0DN_Yt4gMFMSyhOpJJcW4",
    authDomain: "timetable-ab5e6.firebaseapp.com",
    databaseURL: "https://timetable-ab5e6-default-rtdb.firebaseio.com",
    projectId: "timetable-ab5e6",
    storageBucket: "timetable-ab5e6.appspot.com",
    messagingSenderId: "957468552036",
    appId: "1:957468552036:web:e74d2da35d2fb94d59a871"
})

const db = getFirestore(app);

export default db;