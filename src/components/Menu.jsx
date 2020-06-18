import React from "react"
import {AddListButton, ListForm, ListInputField, LogOut, MenuWrapper} from "./style/MenuStyle";
import {logOut} from "../scripts/authenticator";
import {List} from "./List";

export const Menu = (props) => {
    return (
        <MenuWrapper>
            <ListForm onSubmit={(e) => {
                e.preventDefault()
                e.persist()
                if (e.target.listInput.value !== '') {
                    props.addList(e.target.listInput.value);
                }
                e.target.listInput.value = '';
            }} autoComplete="on">
                <ListInputField autoFocus type="text" placeholder="Add list" id="listInput" autoComplete="off"/>
                <AddListButton>Add List</AddListButton>
            </ListForm>
            {props.lists.lists.map(list =>
                <List
                    key={Math.random()}
                    name={list}
                    updateList={props.updateCurrentList}
                    deleteList={props.deleteList}
                />)}
            <LogOut onClick={logOut}>Log out</LogOut>
        </MenuWrapper>
    )
};