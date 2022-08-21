import { Grid } from "@mui/material";
import React from "react";
import { AmountTextField } from "../amount/AmountTextField";
import { TitleWithOnclickTextfield } from "../updateItem/TitleWithOnclickTextfield"
import { Checkmark } from "../checkmark/Checkmark"
import DeleteButton from "../deleteItem/DeleteButton"


export const BasicShoppingListItem = (props) => {
    return (
        <>
            <Grid container spacing={25}
                alignItems="center"
                justifyContent="left"
            >
                <Grid item mx={2}>
                    <Checkmark itemId={props.item.id} listId={props.listId}/>
                </Grid>
                <Grid item mx={2}>
                    <TitleWithOnclickTextfield itemName={props.item.item.name} 
                                            itemId={props.item.id}
                                            listId={props.listId}/>
                </Grid>
                <Grid item mx={2} alignItems="right">
                    <AmountTextField itemId={props.item.id} amount={props.item.amount} listId={props.listId}/>
                </Grid>
                < Grid item mx={2}>
                    <DeleteButton itemId={props.item.id} listId={props.listId} itemTitle={props.item.item.name} />
                </Grid>
            </Grid>
        </>
    )
}
