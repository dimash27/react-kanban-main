import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
  apiKey: "AIzaSyDzlpNO3OB1JgX6aXSMDMd4LIdnh1-Q-jk",
  authDomain: "kanban-59fdf.firebaseapp.com",
  projectId: "kanban-59fdf",
  storageBucket: "kanban-59fdf.appspot.com",
  messagingSenderId: "259117295014",
  appId: "1:259117295014:web:e4f8ec9098a380ab669b67",
  measurementId: "G-ZH5981GR18"
});

const db = firebase.database();

export default db;