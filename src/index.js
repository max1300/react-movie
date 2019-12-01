import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA5pPKO8J9sR1m3hyPu7WJw2MzIu0z0q6o",
    authDomain: "react-tchat-e518d.firebaseapp.com",
    databaseURL: "https://react-tchat-e518d.firebaseio.com",
    storageBucket: "react-tchat-e518d.appspot.com",
    messagingSenderId: "640840838780"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
