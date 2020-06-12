import React from "react";
import {authenticate} from "../scripts/authenticator";


export class LogInForm extends React.Component {
    render() {
        sessionStorage.clear();//todo behövs denna?
        authenticate('a', 'a');
        console.log(sessionStorage.getItem('id'));
            return (<form id="login_form" autoComplete="on" onSubmit={this.authenticate}>
                <input type="text" autoComplete="off" placeholder="Username" id="username" />
                <input type="password" autoComplete="false" placeholder="Password" id="password" />
                <button id="submit_login">Log in</button>
            </form>
            )
    }

    authenticate(e) {
        e.preventDefault();
        authenticate(e.target.username.value,
            e.target.password.value)
    }

}