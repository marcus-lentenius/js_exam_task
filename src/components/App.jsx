import React from "react";
import {LogInForm} from "./LogIn";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = <LogInForm/>;
    }
    render() {
        return (
            this.state
        );
    }

    renderComponent() {

    }
}