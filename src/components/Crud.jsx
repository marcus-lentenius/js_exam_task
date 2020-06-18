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

//todo slå ihop read och getData
// gör så det inte behövs köras onödigt många gånger
    async read(type) {
        await this.getData();
        switch (type) {
            case('items'):
                return this.doc.data().items;
            case('lists'):
                return this.doc.data().lists;
        }
    }

    async write({name, listName, checked = false}) {
        //todo gör en .set med en ny lista så duplicates får finnas
        const item = {
            name: name,
            list_name: listName,
            checked: checked
        }
        return store.collection('lists').doc(this.doc.id).update({
            items: firebase.firestore.FieldValue.arrayUnion(item)
        }).catch((e) => console.error('write error: ', e));
    }

    //todo slå samman med write()
    async writeList(name) {
        //todo gör en .set med en ny lista så duplicates får finnas
        return store.collection('lists').doc(this.doc.id).update({
            lists: firebase.firestore.FieldValue.arrayUnion(name)
        }).catch((e) => console.error('write error: ', e));
    }

    async delete(item) {
        return store.collection('lists').doc(this.doc.id).update({
            items: firebase.firestore.FieldValue.arrayRemove(item)
        }).catch((e) => console.error('delete error: ', e));
    }

    //todo slå samman med delete()
    async deleteList(name) {
        return store.collection('lists').doc(this.doc.id).update({
            lists: firebase.firestore.FieldValue.arrayRemove(name)
        }).catch((e) => console.error('delete error: ', e));
    }

    update(items) {
        store.collection('lists').doc(this.doc.id).set({
            items: items
        }, {merge: true}).catch((e) => console.error('update error: ', e));
    }

}

export const crud = new Crud();