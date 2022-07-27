package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.model.ShoppingListPosition;
import at.enough.dashboard.shoppinglist.model.repository.ShoppingListPositionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShoppingListItemService {

    private ShoppingListPositionRepository shoppingListItemRepository;

    public Optional<ShoppingListPosition> edit(long id, ShoppingListPosition shoppingListPosition) {

//        Optional<ShoppingListPosition> persistedShoppingListPosition = shoppingListItemRepository.findBy(id);
        return Optional.empty();

    }

}
