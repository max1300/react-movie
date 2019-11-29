import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAx7lQ-RtYuQZ1tBdyFN7_QXrQSVkIceKE",
    authDomain: "chibre-b5ac2.firebaseapp.com",
    databaseURL: "https://chibre-b5ac2.firebaseio.com",
    projectId: "chibre-b5ac2",
    storageBucket: "chibre-b5ac2.appspot.com",
    messagingSenderId: "713633864869",
    appId: "1:713633864869:web:6a3d5499295a9f0cbb814c",
    measurementId: "G-LH9TG63GQS"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("movies")