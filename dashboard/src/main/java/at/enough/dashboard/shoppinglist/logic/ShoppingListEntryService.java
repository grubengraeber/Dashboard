package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListEntryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShoppingListEntryService {

    private final ShoppingListEntryRepository shoppingListItemRepository;

    public Optional<ShoppingListEntry> edit(long id, ShoppingListEntry entry) {
        Optional<ShoppingListEntry> persistedEntryOptional = shoppingListItemRepository.findById(id);
        if (persistedEntryOptional.isEmpty()) {
            return Optional.empty();
        }

        entry.setId(id);
        ShoppingListEntry editedSavedEntry = shoppingListItemRepository.save(entry);
        return Optional.of(editedSavedEntry);
    }


    public void delete(Long entryId) {
        Optional<ShoppingListEntry> shoppingListEntryOptional = shoppingListItemRepository.findById(entryId);
        if (shoppingListEntryOptional.isEmpty()) {
            return;
        }

        shoppingListItemRepository.delete(shoppingListEntryOptional.get());
    }

}