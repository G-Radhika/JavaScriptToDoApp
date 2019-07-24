var firebaseConfig = {
    apiKey: "<your Key>",
    authDomain: "<>",
    databaseURL: "<>",
    projectId: "<>",
    storageBucket: "<>",
    messagingSenderId: "<id>",
    appId: "<id>"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
