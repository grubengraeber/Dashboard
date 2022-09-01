import { Grid } from "@mui/material";
import React from "react";
import { AmountTextField } from "../amount/AmountTextField";
import { TitleWithOnclickTextfield } from "../updateItem/TitleWithOnclickTextfield"
import { Checkmark } from "../checkmark/Checkmark"
import DeleteButton from "../deleteItem/DeleteButton";

export const BasicShoppingListItem = (props) => {


    return (

        <>
            <Grid container spacing={25}
                alignItems="center"
            >
                <Grid item mx={2}>
                    <Checkmark item={props.item} itemId={props.item.id} listId={props.listId} />
                </Grid>
                <Grid item  style={{width: "400px"}}>
                    <TitleWithOnclickTextfield item={props.item} itemName={props.item.item.name}
                        itemId={props.item.id}
                        listId={props.listId} 
                        itemUnchecked={props.itemUnchecked} />
                </Grid>
                <Grid item mx={2}>
                    <AmountTextField itemId={props.item.id} item={props.item} amount={props.item.amount} listId={props.listId} />
                </Grid>
                < Grid item mx={2}>
                    <DeleteButton itemId={props.item.id} listId={props.listId} itemTitle={props.item.item.name} />
                </Grid>
            </Grid>
        </>
    )
}
