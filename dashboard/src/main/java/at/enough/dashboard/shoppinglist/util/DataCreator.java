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
        List<User> users = createUsers();
        List<Item> items = createItems();


        List<ShoppingListEntry> entries = new ArrayList<>(List.of(
                ShoppingListEntry.builder()
                        .item(items.get(0))
                        .amount(2)
                        .user(users.get(0))
                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(1))
                        .amount(4)
                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(2))
                        .amount(1)
                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(3))
                        .amount(1)
                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(4))
                        .amount(2)
                        .build(),
                ShoppingListEntry.builder()
                        .item(items.get(5))
                        .amount(2)
                        .build()));
        shoppingListEntryRepository.saveAll(entries);


        ShoppingList testShoppingList = ShoppingList.builder()
                .entries(entries)
                .name("test list")
                .build();

        shoppingListRepository.save(testShoppingList);
    }

    private List<User> createUsers() {
        List<User> users = new ArrayList<>();
        users.add(User.builder()
                .userName("loremIp")
                .firstName("Peter")
                .lastName("Classic")
                .email("peter@classic.com")
                .build());

        userRepository.saveAll(users);
        return users;
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
