import { Grid } from "@mui/material";
import React from "react";
import { AmountTextField } from "../amount/AmountTextField";
import { TitleWithOnclickTextfield } from "../updateItem/TitleWithOnclickTextfield"
import { DeleteButton } from "../deleteItem/DeleteButton"
import {Checkmark} from "../checkmark/Checkmark"


export const BasicShoppingListItem = (props) => {
  return (
    <>
        <Grid container spacing={25} 
        alignItems="center"
        justifyContent="left"
        >
        <Grid item mx={2}>
            <Checkmark itemId={props.item.id} />
        </Grid>
        <Grid item mx={2}>
            <TitleWithOnclickTextfield itemName={props.item.item.name}/>
        </Grid>
        <Grid item mx={2} alignItems= "right">
            <AmountTextField itemId={props.item.id} amount={props.item.amount} />
        </Grid>
        < Grid item mx={2}>
            <DeleteButton itemId={props.item.id} />
        </Grid>
        </Grid>
    </>
  )
}