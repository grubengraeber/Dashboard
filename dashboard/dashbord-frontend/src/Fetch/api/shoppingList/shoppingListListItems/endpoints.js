import axios from "../../../axiosConfiguration"

const EXTENDED_BASE_ROUTE = "/api/shopping-list/";

const HEADERS = {"Access-Control-Allow-Origin": "*"}

const EMPTY_BODY = {}

export const endpoints = {
    updateItemCustom: async (listId, itemId, item, setSuccessMessage, setIsSuccess, setIsError, setErrorMessage, setStartAmount, changedValue) => { 
        try {
            axios.put(EXTENDED_BASE_ROUTE + listId + "/entries/" + itemId, item, HEADERS)
            .then((response) => {
                // setIsSuccess(true);
                // setSuccessMessage("Changing the amount of item: '" + item.item.name + "' to: " + changedValue + ", worked!");
                // ADDED FOLLOWING LINE BECAUSE OF WARNING THAT 'setStartAmount' VARIABLE WAS NOT USED
                setStartAmount(changedValue)
                console.log("Update was successful.")
            })
        } catch (error) {
            if(error.response) {
                // setIsError(true)
                // setErrorMessage(error.message)
                console.log(error.message)
            }
        }
    },
    updateItem: async (listId, itemId, item) => {
        axios.put(EXTENDED_BASE_ROUTE + listId + "/entries/" + itemId, item)
    },
    deleteItem: async (listId, itemId, setSuccessOpen, setSuccessMessage, itemTitle, setErrorOpen, setErrorMessage) => {
        try {
            axios.delete(EXTENDED_BASE_ROUTE + listId + "/entries/" + itemId, EMPTY_BODY, HEADERS)
        .then((response) => {
          /* setSuccessOpen(true)
          setSuccessMessage("Deleting item '" + itemTitle + "' was successful!") */
          console.log("Success deleting")
    })
          
        } catch (error) {
            if(error.response) {
                /* setErrorOpen(true)
                setErrorMessage(error.message) */
                console.log(error.message)
            }
        }
    },
    updateItemCustomName: async (listId, itemId, item, textField, setIsSuccess, setStartName, newItemName, setSuccessMessage, setIsError, setErrorMessage, setTextField) => {
        try {
            axios.put(EXTENDED_BASE_ROUTE + listId + "/entries/" + itemId, item, EMPTY_BODY, HEADERS)
            .then((response) => {
                textField ? setTextField(false) : setTextField(true)
                // setIsSuccess(true)
                // ADDED FOLLOWING LINE BECAUSE OF WARNING THAT 'setStartName' VARIABLE WAS NOT USED
                setStartName(newItemName)
                // setSuccessMessage("Changing name to: '" + newItemName + "' was successful!" )
                console.log("Update was successful.")
                })
        } catch (error) {
            if(error.response) {
                // setIsError(true)
                // setErrorMessage(error.message)
                console.log(error.message)
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
        await axios.post(EXTENDED_BASE_ROUTE + listId + "/entries", requestBody, HEADERS)
        .then((response) => {
            disregardForm()
            // setIsSuccess(true)
            // setSuccessMessage("Adding item: '" + itemName + "' was successful!")
            console.log("Adding item was successful!")
        })
        } catch (error) {
            // commented next lines otherwise it would say "setIsError is not a function"
            // setIsError(true)
            // setErrorMessage(error.message)
            console.log(error.message)
        }
    }

}