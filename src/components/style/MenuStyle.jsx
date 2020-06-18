import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
    position: fixed;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color:#fff5f5;
    border-right: 2px solid #ffe7e7;
`
export const ListInputField = styled.input`
    height: 30px;            
    width: 153px;     
    margin: 10px 0 0 10px;       
    padding-left: 10px;      
    border-radius: 10px 0 0 10px;
    border: 1px solid #ffe7e7;
    &:focus{
      outline: none;
    } 
`
export const ListForm = styled.form`
`
export const AddListButton = styled.button`
width: 62px;
    height: 34px;
    border-radius: 0 10px 10px 0;
    border: 1px solid #ffe7e7;
    border-left: 0;
    outline: none;
    margin-bottom: 20px;
    &:hover{
        background-color: #1E80EF;
        color: white;
    }
    &:active{
        background-color: #398dec;
        color: white;
    }
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
    cursor: pointer;
    &:hover{
        background-color: #1E80EF;
        color: white;
    }
    &:active{
        background-color: #398dec;
        color: white;
    }
`