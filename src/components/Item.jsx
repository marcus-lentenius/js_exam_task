import React, {useState} from "react";
import {ADelete, AUpdate, CheckBox, InputUpdateTextField, ItemWrapper, Li, P, UpdateOptions} from "./style/ItemStyles";
import styled from "@emotion/styled";

export const Item = ({item, removeItem, updateItem,reRender}) => {
    const [isChecked, toggleIsChecked] = useState(0);
    const [isUpdateable, toggleUpdatable] = useState(false);
    const [itemContent, setItemContent] = useState('')
    const [checkedStyled, toggleCheckedStyle] = useState('')

    //todo use emotion css?
    const P = styled.p`
        margin-left: 10px;
        ${item.checked ? checkedStyled : ''}
    `
    if (!isUpdateable) {
        return (
            <Li>
                <CheckBox
                    checked={item.checked}
                    type="checkbox"
                    onChange={() => {
                        item.checked ? item.checked = false : item.checked = true;
                        toggleIsChecked({isChecked: item.checked})
                        updateItem();
                        reRender();
                    }}/>

                <ItemWrapper onClick={() => {
                    toggleUpdatable(true);
                    setItemContent(item.name);
                }}>
                    <P>
                        {item.name}
                    </P>
                </ItemWrapper>

                <ADelete onClick={() => removeItem(item)}>
                    Delete
                </ADelete>
            </Li>
        );
    } else {
        return (
            <Li>
                <CheckBox
                    checked={item.checked}
                    type="checkbox"
                    onChange={() => {
                        item.checked ? item.checked = false : item.checked = true;
                        toggleIsChecked({isChecked: item.checked})
                        updateItem();
                        reRender();
                    }}
                />
                <InputUpdateTextField
                    type="text"
                    defaultValue={itemContent}
                    autoFocus
                    onBlur={() => doUpdate()}
                    onChange={(e) => {
                        setItemContent(e.target.value);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            doUpdate()
                        }
                    }}
                />

                <UpdateOptions>
                    <AUpdate onClick={() => doUpdate()}>🗸</AUpdate>
                </UpdateOptions>
            </Li>
        );
    }

    function doUpdate() {
        item.name = itemContent;
        updateItem(item);
        toggleUpdatable(false)
    }
};