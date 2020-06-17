import styled from "@emotion/styled";

const Basic = {
    display: 'block'
}
const Input = styled.input`
    padding-left: 10px;  
    height: 30px;             
    width: 300px; 
    border: 1px solid black;  
    ${Basic},
    &:focus{
        outline: none;
    }  
`
export const Username = styled(Input)` 
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const Password = styled(Input)`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top: none;
`
export const LoginButton = styled.button`
    display: block;
    right: 0;
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
export const Label = styled.label`
    display: block;
    font-family: Calibri, serif;
    margin-bottom: 20px;
`
export const Form = styled.form`
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
    position: absolute;
`
export const Retry = styled.div`
    top: 30%;
    left: 50%;
    transform: translate(-50%, 225%);
    width: 300px;
    z-index: 999;
    text-align:center;
    background-color: red;
    color: white;
    font-family: Calibri, serif;
    padding: 10px 20px;
    font-size: 16px;
    position: relative;
`