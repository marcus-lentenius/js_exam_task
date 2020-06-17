import React from "react";
import {LoginForm} from "./Login";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = <LoginForm/>;
    }
    render() {
        return (
            this.state
        );
    }

    renderComponent() {

    }
}