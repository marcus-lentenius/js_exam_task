//todo async
import {store} from "./Firebase";
import * as firebase from "firebase";

class Crud {
    constructor() {
        this.doc = undefined;
        this.getData().catch((e) => console.error('setStore error: ', e));
    }

    async getData() {
        return store.collection('lists')
            .where("id", "==", sessionStorage.getItem('id'))
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                        this.doc = doc;
                    }
                )
            }).catch((e) => {
                console.error('setStore error: ', e);
            });
    }

    async read() {
        await this.getData();
        return this.doc.data().list;
    }

    async write({name, checked = false}) {
        //todo gör en .set med en ny lista så duplicates får finnas
        const item = {
            name: name,
            checked: checked
        }
        return store.collection('lists').doc(this.doc.id).update({
            list: firebase.firestore.FieldValue.arrayUnion(item)
        }).catch((e) => console.error('write error: ', e));
    }

    delete(item) {
        //todo return
        return store.collection('lists').doc(this.doc.id).update({
            list: firebase.firestore.FieldValue.arrayRemove(item)
        }).catch((e) => console.error('delete error: ', e));
    }

    update(items) {
       store.collection('lists').doc(this.doc.id).set({
            list: items
        },{merge: true}).catch((e) => console.error('update error: ', e));
    }
}

export const crud = new Crud();