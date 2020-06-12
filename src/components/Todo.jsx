import React from "react";
import {logOut} from "../scripts/authenticator";
import {crud} from "./Crud";
import "../styles/todo.css"
import {Item} from "./Item";

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            test: 'test'
        };
        this.getItems().catch((e) => console.error(e));
    }

    render() {
        return (
            <>
                <form id="items" onSubmit={this.addItem.bind(this)}>
                    <input type="text" placeholder="Add item" id="itemInput"/>
                    <button>Add Item</button>
                </form>
                <ul>
                        {this.state.items.map((item) =>
                        <Item
                            item={item}
                            check={this.check}
                            removeItem={this.removeItem.bind(this)}
                            updateItem={this.update.bind(this)}
                        />
                    )}
                </ul>
                <button onClick={logOut}>log out</button>
            </>
        );
    }

    update() {
        crud.update(this.state.items);
    }

    check(id) {
        document.querySelector(`#${id}`)
            .classList.toggle('checked')
    }

    async getItems() {
        let items = await crud.read();
        this.setState({items: items})
    }

    async removeItem(item) {
        await crud.delete(item);
        await this.getItems();
    }

    async addItem(e) {
        e.preventDefault();
        e.persist();

        await crud.write({name: e.target.itemInput.value});

        e.target.itemInput.value = '';
        e.target.itemInput.focus();

        await this.getItems();
    }
}