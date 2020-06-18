import React from "react";
import ReactDOM from "react-dom";
import {LoginForm} from "../components/Login";
import {App} from "../components/App";
import {Todo} from "../components/Todo";

const app = new App();

const main = document.querySelector('#main');
if (main) {
    ReactDOM.render(app.state, main);
}

export function setState(state) {
    switch (state) {
        case 'main':
            app.state = <Todo/>;
            break;
        case 'logIn':
            app.state = <LoginForm/>;
            break;
    }
    ReactDOM.render(app.state, main);
}