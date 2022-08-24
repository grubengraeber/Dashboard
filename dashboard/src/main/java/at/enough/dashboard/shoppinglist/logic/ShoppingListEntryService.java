package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.dao.repository.ItemRepository;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListEntryRepository;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListRepository;
import at.enough.dashboard.shoppinglist.model.AddItem;
import at.enough.dashboard.shoppinglist.model.Item;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShoppingListEntryService {

    private final ShoppingListEntryRepository shoppingListItemRepository;
    private final ShoppingListRepository shoppingListRepository;
    private final ItemRepository itemRepository;

    public Optional<ShoppingListEntry> edit(long id, ShoppingListEntry entry) {
        Optional<ShoppingListEntry> persistedEntryOptional = shoppingListItemRepository.findById(id);
        if (persistedEntryOptional.isEmpty()) {
            return Optional.empty();
        }

        entry.setId(id);
        ShoppingListEntry editedSavedEntry = shoppingListItemRepository.save(entry);
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

    public void add(AddItem addItem, Long listId) {
        Optional<ShoppingList> optionalShoppingList = shoppingListRepository.findById(listId);
        if (optionalShoppingList.isEmpty()) {
            return;
        }
        Item item;
        if (itemRepository.existsByName(addItem.getName())) {
            item = itemRepository.findFirstByName(addItem.getName());
        } else {
            item = Item.builder().name(addItem.getName()).build();
            itemRepository.save(item);
        }
        ShoppingList shoppingList = optionalShoppingList.get();
        ShoppingListEntry shoppingListEntry = ShoppingListEntry.builder()
                .shoppingList(shoppingList)
                .item(item)
                .amount(addItem.getAmount())
                .addedTime(LocalDateTime.now())
                .build();
        shoppingListItemRepository.save(shoppingListEntry);
    }
}
