import { Card, CardContent, Grid, CircularProgress, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import {BasicShoppingListItem} from "./itemTemplate/BasicShoppingListItem";
import axios from "axios";
import { AddForm } from "./addItem/AddForm";


export const ShoppingList = props => {
    const [items, setItems] = useState([])
    const [listName, setListName] = useState("")
    const [loading, setLoading] = useState(true)
    const [listId, setListId] = useState(0)
    const [newItemFormOn, setNewItemFormOn] = useState(false)

    const SHOPPING_LIST_ENDPOINT = "http://localhost:8080/api/shopping-list";
    const getShoppingList = () => {
        axios.get(SHOPPING_LIST_ENDPOINT)
        .then((response) => {
            const ShoppingListItemsLoaded = response.data[0].items;
            const ShoppingListNameLoaded = response.data[0].name;
            const ShoppingListIdLoaded = response.data[0].id;
            setItems(ShoppingListItemsLoaded);
            setListName(ShoppingListNameLoaded);
            setListId(ShoppingListIdLoaded);
            setLoading(false);
        })
        .catch(error => console.log(`Error: ${error}`));
    }

    useEffect(() => {
        getShoppingList();
    }, [items]);

    function toggleNewItem(clickEvent) {
        newItemFormOn ? setNewItemFormOn(false) : setNewItemFormOn(true);
    }

    function handleChange(newValue) {
        setNewItemFormOn(newValue)
    }

    return (
        <>  
            <Grid   container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ margin: "10px" }}>
                <Grid item>
                    <Card sx={{ padding: "10px" }}>
                        <h3>{loading ? <CircularProgress/> : listName}</h3>
                    </Card>
                </Grid>
                <Grid item sx={{ alignment: "right" }}>
                    <Card >
                        { newItemFormOn ? <AddForm items={items} listId={listId} newItemFormOn={newItemFormOn} onChange={handleChange} /> : <Button onClick={toggleNewItem}>New Item</Button> }
                    </Card>
                </Grid>
                <Grid   
                    container
                    spacing={0}
                    alignItems="center"
                    justifyContent="center"></Grid>
                {items.map((item) => (
                
                    <Grid item  key={item.id}>
                        <Card>
                            <CardContent sx={{ display: "flex", width: "1200px"}}>
                                <BasicShoppingListItem key={item.id} item={item} listId={listId} />
                            </CardContent>
                        </Card>
                    </Grid>
            ))}
            </Grid>
        </>
    );
};

export default ShoppingList;