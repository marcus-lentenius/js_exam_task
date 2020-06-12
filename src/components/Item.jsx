import React, {useState} from "react";

export const Item = ({item, removeItem, updateItem}) => {
    const [isChecked, setIsChecked] = useState(0);


    //todo uppdatera när check
    // lägg till edit osv

    return (
        <li>
            <input
                checked={item.checked ? true : false}
                type="checkbox"
                onChange={() => {
                    item.checked ? item.checked = false : item.checked = true;
                    setIsChecked({isChecked:  item.checked})
                    updateItem();
                }}
                // onClick={(e) => check(item)}
            />

            <p className={item.checked ? "checked" : ""}>{item.name}</p>

            <a onClick={(e) => removeItem(item)}>Delete</a>
        </li>
    );
};