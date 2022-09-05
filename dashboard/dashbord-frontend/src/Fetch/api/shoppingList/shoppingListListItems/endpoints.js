import axios from "../../../axiosConfiguration"

const EXTENDED_BASE_ROUTE = "/api/shopping-list/";

const HEADERS = {"Access-Control-Allow-Origin": "*"}

const EMPTY_BODY = {}

export const endpoints = {
    updateItemCustom: async (listId, itemId, item, setSuccessMessage, setIsSuccess, setIsError, setErrorMessage, setStartAmount, changedValue) => { 
        try {
            axios.put(EXTENDED_BASE_ROUTE + listId + "/entries/" + itemId, item, HEADERS)
            .then((response) => {
                setIsSuccess(true);
                setSuccessMessage("Changing the amount of item: '" + item.item.name + "' to: " + changedValue + ", worked!");
                // ADDED FOLLOWING LINE BECAUSE OF WARNING THAT 'setStartAmount' VARIABLE WAS NOT USED
                setStartAmount(changedValue)
            })
        } catch (error) {
            if(error.response) {
                setIsError(true)
                setErrorMessage(error.message)
            }
        }
    },
    updateItem: async (listId, itemId, item) => {
        axios.put(EXTENDED_BASE_ROUTE + listId + "/entries/" + itemId, item)
    },
    deleteItem: async (listId, itemId, setSuccessOpen, setSuccessMessage, itemTitle, setErrorOpen, setErrorMessage) => {
        try {
            axios.delete(EXTENDED_BASE_ROUTE + listId + "/entries/" + itemId, EMPTY_BODY, HEADERS)
        .then(() => {
          setSuccessOpen(true)
          setSuccessMessage("Deleting item '" + itemTitle + "' was successful!")
    })
          
        } catch (error) {
            if(error.response) {
                setErrorOpen(true)
                setErrorMessage(error.message)
            }
        }
    },
    updateItemCustomName: async (listId, itemId, item, textField, setIsSuccess, setStartName, newItemName, setSuccessMessage, setIsError, setErrorMessage, setTextField) => {
        try {
            axios.put(EXTENDED_BASE_ROUTE + listId + "/entries/" + itemId, item, EMPTY_BODY, HEADERS)
            .then(textField ? setTextField(false) : setTextField(true))
            .then(
                setIsSuccess(true),
                // ADDED FOLLOWING LINE BECAUSE OF WARNING THAT 'setStartName' VARIABLE WAS NOT USED
                setStartName(newItemName)
            )
            .then(setSuccessMessage("Changing name to: '" + newItemName + "' was successful!" ))
        } catch (error) {
            if(error.response) {
                setIsError(true)
                setErrorMessage(error.message)
              }
        }
    },
    addItem: async (itemName, itemAmount, listId, 
        disregardForm, setIsSuccess, setSuccessMessage, 
        setIsError, setErrorMessage) => {
        try {
            const requestBody = 
            {
                "name": itemName,
                "amount": itemAmount
            }
        axios.post(EXTENDED_BASE_ROUTE + listId + "/entries", requestBody, HEADERS)
        .then((response) => {
            disregardForm()
            setIsSuccess(true)
            setSuccessMessage("Adding item: '" + itemName + "' was successful!")
        })
        } catch (error) {
            setIsError(true)
            setErrorMessage(error.message)
        }
    }

}