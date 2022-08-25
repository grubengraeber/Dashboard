package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.dao.repository.ItemRepository;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListEntryRepository;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListRepository;
import at.enough.dashboard.shoppinglist.model.Item;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShoppingListEntryService {

    private final ShoppingListEntryRepository shoppingListItemRepository;
    private final ShoppingListRepository shoppingListRepository;
    private final ItemRepository itemRepository;

    public Optional<ShoppingListEntry> edit(long id, ShoppingListEntry entry, long shoppingListId) {
        Optional<ShoppingListEntry> persistedEntryOptional = shoppingListItemRepository.findById(id);
        if (persistedEntryOptional.isEmpty()) {
            return Optional.empty();
        }
        Optional<ShoppingList> optionalShoppingList = shoppingListRepository.findById(shoppingListId);
        if (optionalShoppingList.isEmpty()) {
            return Optional.empty();
        }
        ShoppingList shoppingList = optionalShoppingList.get();
        entry.setShoppingList(shoppingList);
        entry.setId(id);
        if (isNewItemName(persistedEntryOptional.get(), entry)) {
            entry.setItem(getItem(entry.getItem().getName()));
        }
        ShoppingListEntry editedSavedEntry = shoppingListItemRepository.save(entry);
        shoppingList.getEntries().add(entry);
        shoppingListRepository.save(shoppingList);

        return Optional.of(editedSavedEntry);
    }


    public void delete(long entryId) {
        Optional<ShoppingListEntry> shoppingListEntryOptional = shoppingListItemRepository.findById(entryId);
        if (shoppingListEntryOptional.isEmpty()) {
            throw new EntityNotFoundException("ShoppingListEntry with id = " + entryId + " not found ");
        }
        ShoppingListEntry shoppingListEntry = shoppingListEntryOptional.get();
        shoppingListItemRepository.delete(shoppingListEntry);
    }

    private boolean isNewItemName(ShoppingListEntry oldShoppingListEntry, ShoppingListEntry updatedShoppingLstEntry) {
        return !oldShoppingListEntry.getItem().getName().equals(updatedShoppingLstEntry.getItem().getName());
    }

    private Item getItem(String itemName) {
        boolean itemExists = itemRepository.existsByName(itemName);
        if (itemExists) {
            return itemRepository.findFirstByName(itemName);
        }
        Item item = Item.builder().name(itemName).build();
        itemRepository.save(item);
        return itemRepository.findFirstByName(itemName);
    }

}
