import React from "react";
import "../styles/index.css";
import {authenticate} from "../scripts/authenticator";
import styled from "@emotion/styled";
import {Username, LoginButton, Password, Label, Form, Retry} from "./style/LoginStyles";


export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFailed: false,
            retryVisible: false
        };
    }

    setLoginFailed() {
        this.setState({loginFailed: true})
    }


    loginForm =
        <Form
            id="login_form"
            autoComplete="on"
            onSubmit={(e) => {
            e.preventDefault();
            authenticate(e.target.username.value,
                e.target.password.value, this.setLoginFailed.bind(this));
        }}>
            <Label>Log in</Label>
            <Username type="text" autoComplete="off" placeholder="Username" id="username"/>
            <Password type="password" autoComplete="false" placeholder="Password" id="password"/>
            <LoginButton id="submit_login">Log in</LoginButton>
        </Form>;

    render() {
        authenticate('a','a', this.setLoginFailed())

        // sessionStorage.clear();//todo behövs denna?
        if (!this.state.loginFailed) {
            return (
                this.loginForm
            )
        } else {
            return (
                <>
                    <Retry>Wrong username or password</Retry>
                    {this.loginForm}
                </>
            )
        }

    }
}