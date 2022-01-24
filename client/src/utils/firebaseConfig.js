// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6mllUCElI2z0DN_Yt4gMFMSyhOpJJcW4",
  authDomain: "timetable-ab5e6.firebaseapp.com",
  databaseURL: "https://timetable-ab5e6-default-rtdb.firebaseio.com",
  projectId: "timetable-ab5e6",
  storageBucket: "timetable-ab5e6.appspot.com",
  messagingSenderId: "957468552036",
  appId: "1:957468552036:web:19316d731e0838fb59a871"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;