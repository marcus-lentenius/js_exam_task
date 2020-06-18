import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4ZiUbv1UxCRpgC4dCe1mZyf7MjCpj5zg",
    authDomain: "jsprojektarbete.firebaseapp.com",
    databaseURL: "https://jsprojektarbete.firebaseio.com",
    projectId: "jsprojektarbete",
    storageBucket: "jsprojektarbete.appspot.com",
    messagingSenderId: "96301836778",
    appId: "1:96301836778:web:b1998364a66fef5cd12a93"
};

firebase.initializeApp(firebaseConfig);

export const store = firebase.firestore();
