import { Card, CardContent, Grid, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import {BasicShoppingListItem} from "./itemTemplate/BasicShoppingListItem";
import axios from "axios";


/*
const shoppingListName = "ShoppingList Weekend"
const shoppingListItems = 
[
    {
        "id": 1,
        "item": {
            "id": 22,
            "name": "Helmet",
            "amount": 3
        }
    },
    {
        "id": 2,
        "item": {
            "id": 33,
            "name": "Phone",
            "amount": 1
        }
    }
];
*/ 

export const ShoppingList = props => {
    const [items, setItems] = useState([])
    const [listName, setListName] = useState("")
    const [loading, setLoading] = useState(true)

    const SHOPPING_LIST_ENDPOINT = "http://localhost:8080/api/shopping-list";
    const getShoppingList = () => {
        axios.get(SHOPPING_LIST_ENDPOINT)
        .then((response) => {
            const ShoppingListItemsLoaded = response.data[0].items;
            const ShoppingListNameLoaded = response.data[0].name;
            setItems(ShoppingListItemsLoaded);
            setListName(ShoppingListNameLoaded);
            setLoading(false);
        })
        .catch(error => console.log(`Error: ${error}`));
    }

    useEffect(() => {
        getShoppingList();
    }, []);

    return (
        <>  
            <Grid   container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ margin: "10px"}}>
                <Grid item>
                    <Card sx={{ padding: "10px" }}>
                    <h3>{loading ? <CircularProgress/> : listName}</h3>
                    </Card>
                </Grid>
                <Grid   container
                    spacing={0}
                    alignItems="center"
                    justifyContent="center"></Grid>
                {items.map((item) => (
                
                    <Grid item  key={item.id}>
                        <Card>
                            <CardContent sx={{ display: "flex", width: "1200px"}}>
                                <BasicShoppingListItem key={item.id} item={item} />
                            </CardContent>
                        </Card>
                    </Grid>
            ))}
            </Grid>
        </>
    );
};

export default ShoppingList;