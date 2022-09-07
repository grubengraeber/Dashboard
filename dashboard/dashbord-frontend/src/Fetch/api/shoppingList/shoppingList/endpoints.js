import axios from "../../../axiosConfiguration";

const SHOPPING_LIST_ENDPOINT = "http://localhost:8080/api/shopping-list";
    
export const endpoints = {
    getFirstShoppingList: async (setItems, setListName, setListId, setLoading) => {
        try {
            await axios.get(SHOPPING_LIST_ENDPOINT)
            .then((response) => {
            const ShoppingListItemsLoaded = response.data[0].items;
            const ShoppingListNameLoaded = response.data[0].name;
            const ShoppingListIdLoaded = response.data[0].id;
            setItems(ShoppingListItemsLoaded);
            setListName(ShoppingListNameLoaded);
            setListId(ShoppingListIdLoaded);
            setLoading(false);
        })
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    },
}

