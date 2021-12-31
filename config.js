import firebase from "firebase"

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAApiK7QVoQrHtvRW7jY00NIU9X23LKc7U",
  authDomain: "project-60-39833.firebaseapp.com",
  databaseURL: "https://project-60-39833-default-rtdb.firebaseio.com/",
  projectId: "project-60-39833",
  storageBucket: "project-60-39833.appspot.com",
  messagingSenderId: "286692206573",
  appId: "1:286692206573:web:dd959b071773c7c22869e4"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default firebase.database();