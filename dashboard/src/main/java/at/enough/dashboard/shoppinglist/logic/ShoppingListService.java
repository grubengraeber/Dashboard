package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListRepository;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShoppingListService {
    private final ShoppingListRepository shoppingListRepository;

    public List<ShoppingList> getListOfShoppingLists() {
        return shoppingListRepository.findAll();
    }

    public Optional<ShoppingList> findBy(long id) {
        return shoppingListRepository.findById(id);


    }

    public void deleteListBy(long id) {
        Optional<ShoppingList> shoppingList = shoppingListRepository.findById(id);
        if (shoppingList.isEmpty()) {
            return;
        }
        shoppingListRepository.delete(shoppingList.get());
    }
}
