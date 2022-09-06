package at.enough.dashboard.shoppinglist.controller;

import at.enough.dashboard.shoppinglist.logic.ShoppingListEntryService;
import at.enough.dashboard.shoppinglist.model.AddItem;
import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RequiredArgsConstructor
@RequestMapping("api/shopping-list")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ShoppingListItemController {

    private final ShoppingListEntryService shoppingListEntryService;
    private final Logger logger = LoggerFactory.getLogger(ShoppingListItemController.class);


    @PostMapping("/{list-id}/entries")
    public void add(@PathVariable("list-id") Long listId,
                    @RequestBody AddItem addItem) {
        logger.info("Added item: " + addItem.toString());
        shoppingListEntryService.add(addItem, listId);
    }

    @PutMapping("/{list-id}/entries/{entry-id}")
    public ShoppingListEntry edit(@PathVariable("list-id") long listId,
                                  @PathVariable("entry-id") long entryId,
                                  @RequestBody ShoppingListEntry shoppingListEntry) {
        Optional<ShoppingListEntry> entryOptional = shoppingListEntryService.edit(entryId, shoppingListEntry, listId);
        if (entryOptional.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Entry not found by id = " + entryId);
        }
        return entryOptional.get();
    }


    @DeleteMapping("{list-id}/entries/{entry-id}")
    public void delete(@PathVariable("entry-id") Long entryId) {
        logger.info("deleted entry with id " + entryId);
        shoppingListEntryService.delete(entryId);
    }

}
