package at.enough.dashboard.shoppinglist.controller;

import at.enough.dashboard.shoppinglist.logic.ShoppingListEntryService;
import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RequiredArgsConstructor
@RequestMapping("api/shopping-list")
public class ShoppingListItemController {

    private final ShoppingListEntryService shoppingListEntryService;

    @PutMapping("{list-id}/entries/{entry-id}")
    public ShoppingListEntry edit(@PathVariable("list-id") long listId,
                                                      @PathVariable("entry-id") long entryId,
                                                      @RequestBody ShoppingListEntry shoppingListEntry) {

        Optional<ShoppingListEntry> entryOptional = shoppingListEntryService.edit(entryId, shoppingListEntry);
        if (entryOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Entry not found by id = "+entryId);
        }

        return entryOptional.get();
    }


    @DeleteMapping("{list-id}/entries/{entry-id}")
    public void delete(@PathVariable("entry-id") Long entryId) {
        shoppingListEntryService.delete(entryId);


    }

}
