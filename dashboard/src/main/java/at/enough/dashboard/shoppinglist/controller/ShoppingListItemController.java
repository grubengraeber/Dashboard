package at.enough.dashboard.shoppinglist.controller;

import at.enough.dashboard.shoppinglist.logic.ShoppingListEntryService;
import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@RequestMapping("api/shopping-list")
public class ShoppingListItemController {

    private final ShoppingListEntryService shoppingListItemService;

    @PutMapping("{list-id}/items/{item-id}")
    public ShoppingListEntry editShoppingListPosition(@PathVariable("list-id") long listId,
                                                      @PathVariable("item-id") long itemId,
                                                      @RequestBody ShoppingListEntry shoppingListPosition) {


        return null;


    }

}
