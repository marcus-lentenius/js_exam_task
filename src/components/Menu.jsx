import React from "react"
import {LogOut, MenuWrapper} from "./style/MenuStyle";
import {logOut} from "../scripts/authenticator";
import {List} from "./List";

export const Menu = (props) => {
    return (
        <MenuWrapper>
            <ul>
                {props.lists.map(list => <List name={list}/>)}
            </ul>
            <LogOut onClick={logOut}>Log out</LogOut>
        </MenuWrapper>
    )
}