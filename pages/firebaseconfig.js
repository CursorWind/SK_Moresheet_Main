import firebase from 'firebase/app';
import 'firebase/firestore';
// Import additional Firebase services as needed

const firebaseConfig = {
  apiKey: "AIzaSyBV1E90xKkb6JbuYAHXMtUvSCiGYaZRjAA",
  authDomain: "sk-techdev.firebaseapp.com",
  projectId: "sk-techdev",
  storageBucket: "sk-techdev.appspot.com",
  messagingSenderId: "477684876840",
  appId: "1:477684876840:web:693947ef25999acbb0571d",
  measurementId: "G-1ZYX5R1VLB"
};

// Initialize Firebase app if it's not already initialized
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error:', error.stack);
  }
}

const firebaseInstance = firebase;

export default firebaseInstance;