import { Grid } from "@mui/material";
import React from "react";
import { AmountTextField } from "../amount/AmountTextField";
import { TitleWithOnclickTextfield } from "../updateItem/TitleWithOnclickTextfield"
import { Checkmark } from "../checkmark/Checkmark"
import DeleteButton from "../deleteItem/DeleteButton";

export const BasicShoppingListItem = ({ 
    item, listId, itemUnchecked, isError, isSuccess, setIsError, 
    setIsSuccess, errorMessage, successMessage, setErrorMessage, 
    setSuccessMessage, isInformation, setIsInformation, 
    informationMessage, setInformationMessage }) => {


    return (

        <>
            <Grid container spacing={25}
                alignItems="center"
            >
                <Grid item mx={2}>
                    <Checkmark item={item} itemId={item.id} listId={listId} />
                </Grid>
                <Grid item  style={{width: "400px"}}>
                    <TitleWithOnclickTextfield 
                    item={item} 
                    itemName={item.item.name}
                    itemId={item.id}
                    listId={listId} 
                    itemUnchecked={itemUnchecked} 
                    isError={isError}
                    isSuccess={isSuccess}
                    setErrorMessage={setErrorMessage}
                    setIsError={setIsError}
                    setSuccessMessage={setSuccessMessage}
                    setIsSuccess={setIsSuccess}
                    successMessage={successMessage}
                    errorMessage={errorMessage}
                    />
                </Grid>
                <Grid item mx={2}>
                    <AmountTextField 
                    itemId={item.id} 
                    item={item} 
                    amount={item.amount} 
                    listId={listId} 
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
                </Grid>
                < Grid item mx={2}>
                    <DeleteButton 
                    itemId={item.id} 
                    listId={listId} 
                    itemTitle={item.item.name} 
                    isError={isError}
                    isSuccess={isSuccess}
                    setErrorMessage={setErrorMessage}
                    setIsError={setIsError}
                    setSuccessMessage={setSuccessMessage}
                    setIsSuccess={setIsSuccess}
                    successMessage={successMessage}
                    errorMessage={errorMessage}
                    />
                </Grid>
            </Grid>
        </>
    )
}
