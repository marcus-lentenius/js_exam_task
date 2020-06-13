//todo
// - tips spara nån form av variabel i window.sessionStorage om en användare är inloggad eller inte så ni kan switcha vad (login eller applikationen) som ska visas i UI:et
// - Om en användare är inloggad - visa en applikation med:
// - Ett formulär för att lägga till TODOs (en text?)
// - En lista med redan existerande TODOs
// - Möjlighet att "toggla" om en TODOs är gjord eller inte
// - Möjlighet att ta bort en TODOs från listan
// - Möjlighet att redigera en befintlig TODOs i listan
// - Möjlighet för en inloggad användare att logga ut, då ska inloggsvyn visas

//todo logout = sessionStorage.clear();

import React from "react";
import ReactDOM from "react-dom";
import {LogInForm} from "../components/LogIn";
import {App} from "../components/App";
import {Todo} from "../components/Todo";

const app = new App();

const main = document.querySelector('#main');
if (main) {
    ReactDOM.render(app.state, main);
}

//todo inbyggd setState
export function setState(state) {
    switch (state) {
        case 'main':
            app.state = <Todo/>;
            break;
        case 'login':
            app.state = <LogInForm/>;
            break;
        // case 'loginfail':
        //     app.state = <LogInFail/>;
        //     break;
    }
    ReactDOM.render(app.state, main);
}