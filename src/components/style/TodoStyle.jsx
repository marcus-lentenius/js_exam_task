import styled from "@emotion/styled";

export const Ul = styled.ul`
    padding: 0;
    margin: 0;
`
export const Welcome = styled.div`
    font-family: Calibri, serif;
    text-align: center;
    margin-bottom: 10px;
`
export const CompletedTasks = styled.div`
    border-top: 1px solid #ffeaea;
    font-family: Calibri, serif;
    font-size: 18px;
    text-align: center;
    margin-top: 30px;
    padding-top: 20px;
`
export const MainWrapper = styled.div`
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
    position: absolute;
`
export const AddItemButton = styled.button`
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
export const ItemInputField = styled.input`
        height: 30px;            
        width: 500px;            
        padding-left: 10px;      
        border-radius: 10px 0 0 10px;
        border: 1px solid #ffe7e7;
        &:focus{
        outline: none;
        } 
`