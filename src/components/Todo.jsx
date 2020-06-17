import React from "react";
import {logOut} from "../scripts/authenticator";
import {crud} from "./Crud";
import {Item} from "./Item";
import {AddItemButton, CompletedTasks, ItemInputField, LogOut, MainWrapper, Ul, Welcome} from "./style/TodoStyle";
import {Menu} from "./Menu";

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            lists: []
        };
        this.getItems().catch((e) => console.error(e));
    }

    reRender = () => {
        this.forceUpdate()
    }

    Item = (item) =>
        <Item key={Math.random()}
              item={item}
              check={this.check}
              removeItem={this.removeItem.bind(this)}
              updateItem={this.update.bind(this)}
              reRender={this.reRender.bind(this)}
        />

    render() {
        return (
            <>
                <Menu lists={this.state.lists}/>
                <MainWrapper>
                    <Welcome>Welcome {sessionStorage.user}</Welcome>
                    <form id="items" onSubmit={this.addItem.bind(this)} autoComplete="on">
                        <ItemInputField autoFocus type="text" placeholder="Add item" id="itemInput" autoComplete="off"/>
                        <AddItemButton>Add Item</AddItemButton>
                    </form>
                    <Ul>
                        {this.state.items
                            .filter(item => !item.checked)
                            .map((item) => this.Item(item)
                            )}
                    </Ul>
                    <CompletedTasks>Completed tasks</CompletedTasks>
                    <Ul>
                        {this.state.items
                            .filter(item => item.checked)
                            .map((item) => this.Item(item)
                            )}
                    </Ul>
                </MainWrapper>
            </>
        );
    }

    update() {
        crud.update(this.state.items)
    }

    check(id) {
        document.querySelector(`#${id}`)
            .classList.toggle('checked')
    }

    async getItems() {
        let items = await crud.read()
        this.setState({items: items})
        this.createLists()
    }

    createLists() {
        let lists = this.state.lists;
        this.state.items.map((item) => {
            if (!this.state.lists.includes(item.list_name)) {
                lists.push(item.list_name);
            }
            // if (!(item.list_name in this.state.lists)) {
                // let arr = []
                // arr.push(item)
                // this.state.lists.set(item.list_name, arr);
            // }
        });
        this.setState({
            lists: lists
        })
    }
    async removeItem(item) {
        await crud.delete(item)
        await this.getItems()
    }

    async addItem(e) {
        e.preventDefault();
        e.persist(); // todo vad är detta?

        if (e.target.itemInput.value !== '') {
            await crud.write({name: e.target.itemInput.value})
            e.target.itemInput.value = ''
            e.target.itemInput.focus()

            await this.getItems()
        }

    }
}