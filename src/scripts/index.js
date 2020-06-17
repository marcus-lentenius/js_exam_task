//todo
// - Möjlighet att redigera en befintlig TODOs i listan
// -----
// - Plus i kanten om man gjort nåt kul med Firebase (surprise me)

//todo logout = sessionStorage.clear();

import React from "react";
import ReactDOM from "react-dom";
import {LoginForm} from "../components/Login";
import {App} from "../components/App";
import {Todo} from "../components/Todo";

const app = new App();
//todo LogInForm direkt?
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
        case 'logIn':
            app.state = <LoginForm/>;
            break;
        // case 'logInFailed':
        //     app.state = <LogInReject/>;
        //     break;
    }
    ReactDOM.render(app.state, main);
}