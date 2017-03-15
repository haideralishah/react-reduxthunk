import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAUTWn2F8u3Q7oeYrYHp8OwsDajPk_RB-A",
    authDomain: "test-01-141907.firebaseapp.com",
    databaseURL: "https://test-01-141907.firebaseio.com",
    storageBucket: "test-01-141907.appspot.com",
    messagingSenderId: "906558294346"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;