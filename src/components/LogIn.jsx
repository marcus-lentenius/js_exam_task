import React from "react";
import "../styles/index.css";
import {authenticate} from "../scripts/authenticator";


export class LogInForm extends React.Component {
    render() {
        sessionStorage.clear();//todo behövs denna?
        console.log(sessionStorage.getItem('id'));
        authenticate('a','a')
        return (
            <form id="login_form" className="mainWrapper" autoComplete="on" onSubmit={this.authenticate}>
                <label>Log in</label>
                <div className="inputWrapper">
                    <input type="text" autoComplete="off" placeholder="Username" id="username"/>
                </div>
                <div className="inputWrapper">
                    <input type="password" autoComplete="false" placeholder="Password" id="password"/>
                </div>
                <div className="inputWrapper">
                    <button id="submit_login">Log in</button>
                </div>
            </form>
        )
    }

    authenticate(e) {
        e.preventDefault();
        authenticate(e.target.username.value,
            e.target.password.value)
    }

}