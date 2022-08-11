import React from "react";
import React from "react";
import BasicShoppingListItem from "./itemTemplate/BasicShoppingListItem"

const shoppingListItems = [];

export const ShoppingList = props => {
    return (
        <>
            Shoppinglist
            {shoppingListItems.map(item => {
                return (
                    <BasicShoppingListItem />
                )

            })}
        </>
    );
};