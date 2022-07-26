import { FormControl, TextField, Button, Grid, Autocomplete } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { endpoints as listEndpoints }  from '../../../Fetch/api/shoppingList/shoppingListItems/endpoints';
import { endpoints as listItemEndpoints } from '../../../Fetch/api/shoppingList/shoppingListListItems/endpoints';
import useAuth from "../../../hooks/useAuth";


export const AddForm = ({ listId, onChange, setIsError, 
    setIsSuccess, setErrorMessage, setSuccessMessage }) => {
    const [itemName, setItemName] = useState("")
    const [itemAmount, setItemAmount] = useState(0)
    const [items, setItems] = useState([])
    const { auth } = useAuth();

    const accessToken = auth.accessToken;

    if (items.length === 0) {
        listEndpoints.getItemNames(setItems, setIsError, setErrorMessage, accessToken);
    }
    

    async function addItem(clickEvent) {
        await listItemEndpoints.addItem(itemName, itemAmount, listId, 
            disregardForm, setIsSuccess, setSuccessMessage, 
            setIsError, setErrorMessage, accessToken)
    }

    function disregardForm(clickEvent) {
        onChange(false)
    }

    function handleItemNameChange(changeEvent) {
        setItemName(changeEvent.target.value)
    }

    function handleItemAmountChange(changeEvent) {
        setItemAmount(changeEvent.target.value)
    }

    function handleChosenItemNameFromAutocomplete(changeEvent, selectedOption) {
        changeEvent.value && changeEvent.value !== "" 
        ? setItemName(changeEvent.value) 
        : setItemName(selectedOption);
    }

  return (
    <>
    <FormControl>
        <Grid container sx={{ padding: "5px"}} alignItems="center" spacing={2}>
            <Grid item xs={4}>
                <Autocomplete
                    freeSolo
                    options={items.map((option) => option.name)}
                    onChange={handleChosenItemNameFromAutocomplete}
                    renderInput={(params) => <TextField {...params} 
                                                label="Item Name" 
                                                variant='outlined'
                                                onChange={handleItemNameChange}
                                                value={itemName}
                                                />}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-number"
                    label="Amount"
                    value={itemAmount}
                    onChange={handleItemAmountChange}
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                />
            </Grid>
                <Grid item xs={2} alignItems="center" >
                <Button onClick={addItem} >
                    <AddIcon />
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={disregardForm}>
                    <CloseIcon  />
                </Button>
            </Grid>
        </Grid>
    </FormControl>
    </>
  )
}
