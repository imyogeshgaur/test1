import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBABOwUu2joTur_covJm9bpk03sjOqjJxA",
    authDomain: "vms-app-7bac7.firebaseapp.com",
    projectId: "vms-app-7bac7",
    storageBucket: "vms-app-7bac7.appspot.com",
    messagingSenderId: "328948402632",
    appId: "1:328948402632:web:e7aefb36a33c4e172a98fd"
});

var db = firebaseApp.firestore();

export {db};
