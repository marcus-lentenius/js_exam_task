import {setState} from "./index";
import {store} from "../components/Firebase";
const credentials = store.collection('credentials');

//todo async och return
export function authenticate(username, password, setLogInFailed) {
    credentials.where("username", "==", username)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    if (doc.data().password === password) {
                        window.sessionStorage.setItem('id', doc.data().id); //todo fixa till?
                        window.sessionStorage.setItem('user', username); //todo fixa till?
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