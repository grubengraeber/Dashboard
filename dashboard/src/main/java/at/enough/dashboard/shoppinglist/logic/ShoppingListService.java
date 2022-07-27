package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.shoppinglist.model.repository.ShoppingListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShoppingListService {
    private final ShoppingListRepository shoppingListRepository;

    public List<ShoppingList> getAll() {
        return shoppingListRepository.findAll();
    }

    public Optional<ShoppingList> findBy(long id) {
        Optional<ShoppingList> shoppingListOptional = shoppingListRepository.findBy(id);
        if (shoppingListOptional.isEmpty()) {
            return Optional.empty();
        }

        return shoppingListOptional;


    }

}
