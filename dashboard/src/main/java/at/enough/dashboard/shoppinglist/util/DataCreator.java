package at.enough.dashboard.shoppinglist.util;

import at.enough.dashboard.shoppinglist.dao.repository.ItemRepository;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListEntryRepository;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListRepository;
import at.enough.dashboard.shoppinglist.dao.repository.UserRepository;
import at.enough.dashboard.shoppinglist.model.Item;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import at.enough.dashboard.shoppinglist.model.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataCreator {

    private final ShoppingListRepository shoppingListRepository;
    private final ShoppingListEntryRepository shoppingListEntryRepository;
    private final ItemRepository itemRepository;
    private final UserRepository userRepository;


    public DataCreator(ShoppingListRepository shoppingListRepository,
                       ShoppingListEntryRepository shoppingListEntryRepository,
                       ItemRepository itemRepository,
                       UserRepository userRepository) {
        this.shoppingListRepository = shoppingListRepository;
        this.shoppingListEntryRepository = shoppingListEntryRepository;
        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
        initialize();
    }

    private void initialize() {
        List<Item> items = createItems();

        ShoppingList testShoppingList = ShoppingList.builder()
                .name("test list")
                .build();

        List<ShoppingListEntry> entries = new ArrayList<>(List.of(
                ShoppingListEntry.builder()
                        .item(items.get(0))
                        .amount(2)
                        .active(true)
                        .shoppingList(testShoppingList)
                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(1))
                        .active(true)
                        .amount(4).shoppingList(testShoppingList)

                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(2))
                        .active(true)
                        .amount(1).shoppingList(testShoppingList)
                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(3))
                        .active(true)
                        .amount(1).shoppingList(testShoppingList)
                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(4))
                        .active(true)
                        .amount(2).shoppingList(testShoppingList)
                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(5))
                        .amount(2).shoppingList(testShoppingList)
                        .build()));

        testShoppingList.setEntries(entries);


        shoppingListRepository.save(testShoppingList);

    }


    private List<Item> createItems() {
        List<Item> items = new ArrayList<>();

        items.add(Item.builder()
                .name("Toiletpaper")
                .build());
        items.add(Item.builder()
                .name("Toothpaste")
                .build());
        items.add(Item.builder()
                .name("Beer")
                .build());
        items.add(Item.builder()
                .name("Cheese")
                .build());
        items.add(Item.builder()
                .name("Coke")
                .build());
        items.add(Item.builder()
                .name("Bread")
                .build());
        items.add(Item.builder()
                .name("Milk")
                .build());

        itemRepository.saveAll(items);

        return items;
    }


}
