import React, {useState} from "react";
import styled from "@emotion/styled";

export const Item = ({item, removeItem, updateItem}) => {
    const [isChecked, toggleIsChecked] = useState(0);
    const [isUpdateable, toggleUpdatable] = useState(false);
    const [itemContent, setItemContent] = useState('')
    const [checkedStylde, toggleCheckedStyle] = useState('text-decoration: line-through;')

    //todo uppdatera när check
    // lägg till edit osv
    const ItemWrapper = styled.div`
        width: 300px;
        cursor: pointer;
        display: inline-block;
    `

    const P = styled.p`
      ${item.checked ? checkedStylde : ''}
    `

    const ADelete = styled.a`
        position: absolute;
        right: 0;
    `
    const ACancel = styled.a`
        margin-left: 10px;
        font-size: 25px;
    `
    const AUpdate = styled.a`
        margin-left: 10px;
        font-size: 17px;
    `
    const Input = styled.input`
        height: 29px;
        padding-left: 10px;
    `
    const Li = styled.li`
        padding: 0;
        list-style: none;
        font-family: Calibri, serif;
        font-size: 16px;
    `
    if (!isUpdateable) {
        return (
            <Li>
                <input
                    checked={item.checked ? true : false}
                    type="checkbox"
                    onChange={() => {
                        item.checked ? item.checked = false : item.checked = true;
                        toggleIsChecked({isChecked: item.checked})
                        updateItem();
                    }}/>

                <ItemWrapper onClick={() =>
                    toggleUpdatable(true)}>

                    <P>
                        {item.name}
                    </P>
                </ItemWrapper>

                <ADelete onClick={(e) => removeItem(item)}>
                    Delete
                </ADelete>
            </Li>
        );
    } else {
        return (
            <Li>
                <input
                    checked={item.checked ? true : false}
                    type="checkbox"
                    onChange={() => {
                        item.checked ? item.checked = false : item.checked = true;
                        toggleIsChecked({isChecked: item.checked})
                        updateItem();
                    }}
                />

                <Input type="text"
                       defaultValue={item.name}
                       onChange={(e) => {
                           setItemContent(e.target.value)
                       }}/>

                <div className="updateWrapper">
                    <AUpdate onClick={(e) => {
                        item.name = itemContent;
                        updateItem(item);
                        toggleUpdatable(false)
                    }}>🗸</AUpdate>

                    <ACancel onClick={(e) => {
                        toggleUpdatable(false)
                    }}>⨯</ACancel>

                </div>
            </Li>
        );
    }

};