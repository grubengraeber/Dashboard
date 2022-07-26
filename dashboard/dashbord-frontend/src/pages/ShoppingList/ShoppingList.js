import { Card, CardContent, Grid, CircularProgress, Button, Switch, FormControlLabel } from "@mui/material";
import { RefreshOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { BasicShoppingListItem } from "./itemTemplate/BasicShoppingListItem";
import { AddForm } from "./addItem/AddForm";
import { endpoints } from "../../Fetch/api/shoppingList/shoppingList/endpoints";
import useAuth from "../../hooks/useAuth"


export const ShoppingList = (
    isError, isSuccess, setIsError, setIsSuccess, errorMessage,
    successMessage, setErrorMessage, setSuccessMessage, isInformation,
    setIsInformation, informationMessage, setInformationMessage) => {
    const [items, setItems] = useState([])
    const [listName, setListName] = useState("")
    const [loading, setLoading] = useState(true)
    const [listId, setListId] = useState(0)
    const [newItemFormOn, setNewItemFormOn] = useState(false)
    const [activeOnly, setActiveOnly] = useState(true)
    const { auth } = useAuth();

    const getShoppingList = () => {
        endpoints.getFirstShoppingList(setItems,
            setListName, setListId, setLoading, auth.accessToken)
    }

    function refresh() {
        getShoppingList();
    }

    useEffect(() => {
        getShoppingList();
    }, []);

    function toggleNewItem(clickEvent) {
        newItemFormOn ? setNewItemFormOn(false) : setNewItemFormOn(true);
    }

    function handleChange(newValue) {
        setNewItemFormOn(newValue)
    }

    function handleChecked(changeEvent) {
        setActiveOnly(!activeOnly)
    }

    return (
        <>
            <Grid container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ margin: "10px" }}>
                <Grid item>
                    <Card sx={{ padding: "10px" }}>
                        <h3>{loading ? <CircularProgress /> : listName}</h3>
                    </Card>
                </Grid>
                <Grid item sx={{ alignment: "right" }} >
                    <Grid container
                        spacing={2}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        style={{ margin: "10px" }}>
                        <Grid item>
                            <Card>
                                {newItemFormOn ?
                                    <AddForm items={items}
                                        listId={listId}
                                        newItemFormOn={newItemFormOn}
                                        onChange={handleChange}
                                        isError={isError}
                                        isSuccess={isSuccess}
                                        setErrorMessage={setErrorMessage}
                                        setIsError={setIsError}
                                        setSuccessMessage={setSuccessMessage}
                                        setIsSuccess={setIsSuccess}
                                        successMessage={successMessage}
                                        errorMessage={errorMessage}
                                    /> : <Button onClick={toggleNewItem}>New Item</Button>}
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ paddingLeft: "5px" }}>
                                <FormControlLabel control={<Switch checked={!activeOnly} onChange={handleChecked} />} label="show checked items" />
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                                <RefreshOutlined onClick={refresh} />
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justifyContent="center"></Grid>
                {activeOnly ? items.filter(item => { return item.active === true }).map((item) => (
                    <Grid item key={item.id}>
                        <Card>
                            <CardContent sx={{ display: "flex", width: "1200px" }}>
                                <BasicShoppingListItem
                                    key={item.id}
                                    item={item}
                                    listId={listId}
                                    itemUnchecked={item.active}
                                    isError={isError}
                                    isSuccess={isSuccess}
                                    setErrorMessage={setErrorMessage}
                                    setIsError={setIsError}
                                    setSuccessMessage={setSuccessMessage}
                                    setIsSuccess={setIsSuccess}
                                    successMessage={successMessage}
                                    errorMessage={errorMessage}
                                    isInformation={isInformation}
                                    setIsInformation={setIsInformation}
                                    informationMessage={informationMessage}
                                    setInformationMessage={setInformationMessage}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                )) : items.map((item) => (

                    <Grid item key={item.id}>
                        <Card>
                            <CardContent sx={{ display: "flex", width: "1200px" }}>
                                <BasicShoppingListItem
                                    key={item.id}
                                    item={item}
                                    listId={listId}
                                    itemUnchecked={item.active}
                                    isError={isError}
                                    isSuccess={isSuccess}
                                    setErrorMessage={setErrorMessage}
                                    setIsError={setIsError}
                                    setSuccessMessage={setSuccessMessage}
                                    setIsSuccess={setIsSuccess}
                                    successMessage={successMessage}
                                    errorMessage={errorMessage}
                                    isInformation={isInformation}
                                    setIsInformation={setIsInformation}
                                    informationMessage={informationMessage}
                                    setInformationMessage={setInformationMessage}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </>
    );
};

export default ShoppingList;