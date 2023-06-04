import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBV1E90xKkb6JbuYAHXMtUvSCiGYaZRjAA",
    authDomain: "sk-techdev.firebaseapp.com",
    projectId: "sk-techdev",
    storageBucket: "sk-techdev.appspot.com",
    messagingSenderId: "477684876840",
    appId: "1:477684876840:web:693947ef25999acbb0571d",
    measurementId: "G-1ZYX5R1VLB"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
