import {setState} from "./index";
import {store} from "../components/Firebase";
const credentials = store.collection('credentials');

export function authenticate(username, password, setLogInFailed) {
    credentials.where("username", "==", username)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    if (doc.data().password === password) {
                        window.sessionStorage.setItem('id', doc.data().id);
                        window.sessionStorage.setItem('user', username);
                        setState('main');
                    } else {
                        setLogInFailed()
                    }
                });
            } else {
                setLogInFailed()
            }
        }).catch((error) => {
        console.log('Error ----> ', error);
    });
}

export function logOut() {
    sessionStorage.clear();
    setState('logIn');
}