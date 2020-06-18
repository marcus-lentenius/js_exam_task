import React from "react";
import {crud} from "./Crud";
import {Item} from "./Item";
import {AddItemButton, CompletedTasks, ItemInputField, MainWrapper, Ul, Welcome} from "./style/TodoStyle";
import {Menu} from "./Menu";

//todo måste lägga in onchange i firebase
// lists

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            lists: [],
            currentList: undefined
        };
        this.getItems().catch((e) => console.error(e));
        this.getLists().catch((e) => console.error(e));
    }

   reRender = () => {
        this.forceUpdate()
    }

    Item = (item) => {
        return (
            <Item key={Math.random()}
                  item={item}
                  check={this.check}
                  removeItem={this.removeItem.bind(this)}
                  updateItem={this.update.bind(this)}
                  reRender={this.reRender.bind(this)}
            />)
    }

    updateList(list) {
        this.setState({currentList: list})
    }

    async addList(name) {
        await crud.writeList(name);
        await this.getLists();
    }

    async deleteList(name) {
        this.state.items.filter(item => item.list_name === name).map(item => this.removeItem(item));
        await crud.deleteList(name);
        this.setState({currentList: undefined})
        await this.getLists();
    }

    render() {
        return (
            <>
                <Menu
                    lists={this.state}
                    updateCurrentList={this.updateList.bind(this)}
                    addList={this.addList.bind(this)}
                    deleteList={this.deleteList.bind(this)}
                />
                <MainWrapper>
                    <Welcome>Welcome {sessionStorage.user}</Welcome>
                    <Welcome>{this.state.currentList}</Welcome>
                    <form id="items" onSubmit={this.addItem.bind(this)} autoComplete="on">
                        <ItemInputField autoFocus type="text" placeholder="Add item" id="itemInput" autoComplete="off"/>
                        <AddItemButton>Add Item</AddItemButton>
                    </form>
                        {this.state.items
                            .filter(item => !item.checked && item.list_name === this.state.currentList)
                            .map((item) => this.Item(item)
                            )}
                    <CompletedTasks>Completed tasks</CompletedTasks>
                        {this.state.items
                            .filter(item => item.checked && item.list_name === this.state.currentList)
                            .map((item) => this.Item(item)
                            )}
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
        let items = await crud.read('items')
        this.setState({items: items})
    }

    async getLists() {
        let lists = await crud.read('lists')
        this.setState({lists: lists})

        if (this.state.currentList === undefined) {
            this.setState({
                currentList: lists[0]
            });
        }
    }

    async removeItem(item) {
        await crud.delete(item)
        await this.getItems()
    }

    async addItem(e) {
        e.preventDefault();
        e.persist();

        if (e.target.itemInput.value !== '') {
            await crud.write({name: e.target.itemInput.value, listName: this.state.currentList})
            e.target.itemInput.value = ''
            e.target.itemInput.focus()

            await this.getItems()
        }

    }
}