var firebaseConfig = {
    apiKey: "AIzaSyBNJXr5VxDC1JguCmxUTjLf0mY1TxxDM78",
    authDomain: "todo-5c511.firebaseapp.com",
    databaseURL: "https://todo-5c511.firebaseio.com",
    projectId: "todo-5c511",
    storageBucket: "todo-5c511.appspot.com",
    messagingSenderId: "5975036936",
    appId: "1:5975036936:web:fe51e346d7a4c3af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();