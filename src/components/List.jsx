import React from "react";
import {Delete, ListName, Name} from "./style/ListStyle";

export const List = (props) => {
    return (
        <ListName>
            <Name onClick={() => props.updateList(props.name)}>{props.name}</Name>
            <Delete onClick={()=>props.deleteList(props.name)}>🗑</Delete>
        </ListName>
    )
}