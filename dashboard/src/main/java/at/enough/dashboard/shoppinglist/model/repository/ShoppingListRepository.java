package at.enough.dashboard.shoppinglist.model.repository;

import at.enough.dashboard.shoppinglist.model.ShoppingList;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Repository
@RequiredArgsConstructor
public class ShoppingListRepository {

    private final List<ShoppingList> shoppingListMem = new ArrayList<>();

    public List<ShoppingList> findAll() {
        return shoppingListMem;
    }

    public Optional<ShoppingList> findBy(long id) {
        return shoppingListMem.stream()
                .filter(shoppingList -> shoppingList.getId() == id)
                .findFirst();
    }


    public void add(ShoppingList shoppingList) {

        shoppingListMem.add(shoppingList);
    }

}
