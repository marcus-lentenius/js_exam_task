import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
    position: fixed;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color:#fff5f5;
    border-right: 2px solid #ffe7e7;
`
export const LogOut = styled.button`
    display: block;
    bottom:10px;
    right: 10px;
    position: absolute;
    margin-top: 10px;
    height: 34px;
    border-radius: 10px;
    border: 1px solid black;
    outline: none;
    &:hover{
        background-color: #1E80EF;
        color: white;
    }
    &:active{
        background-color: #398dec;
        color: white;
    }
`