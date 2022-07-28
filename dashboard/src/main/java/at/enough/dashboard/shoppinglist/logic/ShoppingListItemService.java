package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListEntryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShoppingListItemService {

    private final ShoppingListEntryRepository shoppingListItemRepository;

    public Optional<ShoppingListEntry> edit(long id, ShoppingListEntry shoppingListPosition) {

//        Optional<ShoppingListPosition> persistedShoppingListPosition = shoppingListItemRepository.findBy(id);
        return Optional.empty();

    }

}
