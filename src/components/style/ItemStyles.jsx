import styled from "@emotion/styled";
import React from "react";

export const ItemWrapper = styled.div`
    width: 490px;
    cursor: pointer;
    display: inline-block;
    height: 50px;
`
export const ADelete = styled.a`
    cursor: pointer;
    right: 0;
`
export const AUpdate = styled.a`
    cursor: pointer;
    margin-left: 26px;
    font-size: 17px;
`
export const InputUpdateTextField = styled.input`
    display: inline-block;
    width: 470px;
    height: 25px;
    margin: 13px 0 11px 10px;
    font-family: Calibri, serif;
    font-size: 16px;
    padding: 0;
    border: 0;
    border-bottom: 1px solid black;
    &:focus{
            outline: none;
    }
`
export const Li = styled.li`
width: 560px;
left: 10px;
position: relative;
    &:not(:first-child) {
        border-top: 1px solid #ffeaea;
    }
    padding: 0;
    list-style: none;
    font-family: Calibri, serif;
    font-size: 16px;
`
export const UpdateOptions = styled.div`
    display: inline;
    //position: absolute;
    right: 10px;
`
export const CheckBox = styled.input`
    position: relative;
    cursor: pointer;
    &:before {
        border-radius: 10px;
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        top: -3px;
        left: -3px;
        background-color:#e9e9e9;
    }
    &:checked:before {
        border-radius: 10px;
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        top: -3px;
        left: -3px;
        background-color:#1E80EF;
    }
    &:checked:after {
        border-radius: 10px;
        content: "";
        display: block;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: 0;
        left: 3px;
    } 
    `