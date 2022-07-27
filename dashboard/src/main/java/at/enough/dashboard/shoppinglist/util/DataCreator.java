package at.enough.dashboard.shoppinglist.util;

import at.enough.dashboard.shoppinglist.model.Item;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.shoppinglist.model.ShoppingListPosition;
import at.enough.dashboard.shoppinglist.model.repository.ShoppingListRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataCreator {

    private final ShoppingListRepository shoppingListRepository;

    public DataCreator(ShoppingListRepository shoppingListRepository) {
        this.shoppingListRepository = shoppingListRepository;
        initialize();
    }

    private void initialize() {
        List<ShoppingListPosition> positions = new ArrayList<>(List.of(
                ShoppingListPosition.builder()
                        .id(1L)
                        .item(Item.builder()
                                .name("Toilletpaper")
                                .supplier("none")
                                .build())
                        .amount(2)
                        .build(),
                ShoppingListPosition.builder()
                        .id(2L)
                        .item(Item.builder()
                                .name("Icecream")
                                .supplier("None")
                                .build())
                        .amount(4)
                        .build()));

        ShoppingList testShoppingList = ShoppingList.builder()
                .shoppingListPositions(positions)
                .id(1L)
                .name("test list")
                .build();

        shoppingListRepository.add(testShoppingList);


    }


}
