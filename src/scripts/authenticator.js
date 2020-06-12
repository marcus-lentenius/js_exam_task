// import * as firebase from "firebase";
import {setState} from "./index";
import {store} from "../components/Firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyB4ZiUbv1UxCRpgC4dCe1mZyf7MjCpj5zg",
//     authDomain: "jsprojektarbete.firebaseapp.com",
//     databaseURL: "https://jsprojektarbete.firebaseio.com",
//     projectId: "jsprojektarbete",
//     storageBucket: "jsprojektarbete.appspot.com",
//     messagingSenderId: "96301836778",
//     appId: "1:96301836778:web:b1998364a66fef5cd12a93"
// };
//
// firebase.initializeApp(firebaseConfig);
// const store = firebase.firestore();
const credentials = store.collection('credentials');

//todo async och return
export function authenticate(username, password) {
    credentials.where("username", "==", username)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data().password, ' ', password);
                console.log(sessionStorage.getItem('id'), ' ', doc.data().id)
                if (doc.data().password === password) {
                    window.sessionStorage.setItem('id', doc.data().id);
                    console.log(sessionStorage)
                    setState('main');
                } else {
                    console.log('Fail')
                }
            });
        }).catch((error) => {
        console.log('Error ----> ', error);
    });
}

export function logOut() {
    sessionStorage.clear();
    setState('login');
}