package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListEntryRepository;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListRepository;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class ShoppingListEntryServiceTest {

    @Autowired
    ShoppingListRepository shoppingListRepository;
    @Autowired
    ShoppingListEntryRepository shoppingListEntryRepository;


    @Test
    @Order(1)
    void emptyData() {
        List<ShoppingListEntry> entryList = shoppingListEntryRepository.findAll();

        assertTrue(entryList.isEmpty());
    }

    @Test
    @Order(2)
    void addDataTest() {
        ShoppingList shoppingList = ShoppingList.builder()
                .name("testList")
                .build();
        shoppingListRepository.save(shoppingList);
        assertFalse(shoppingListRepository.findAll().isEmpty());
    }

    @Test
    @Order(3)
    void addEntryToShoppingList() {
        initializeData();
        assertFalse(shoppingListEntryRepository.findAll().isEmpty());

    }

    @Test
    @Order(4)
    void deleteShoppingListEntry() {
        initializeData();
        ShoppingListEntry shoppingListEntry = shoppingListEntryRepository.findAll().get(0);

        shoppingListEntryRepository.delete(shoppingListEntry);
        System.out.println("shoppingListEntry = " + shoppingListEntry);
        assertTrue(shoppingListEntryRepository.findAll().isEmpty());
        assertFalse(shoppingListRepository.findAll().isEmpty());
    }


    @Test
    @Order(5)
    void deleteShoppingListAlsoDeletesEntries() {
        initializeData();
        ShoppingList shoppingList = shoppingListRepository.findAll().get(0);
        shoppingListRepository.delete(shoppingList);

        assertTrue(shoppingListRepository.findAll().isEmpty());
        assertTrue(shoppingListEntryRepository.findAll().isEmpty());

    }


    void initializeData() {
        ShoppingList shoppingList = ShoppingList.builder()
                .name("testList")
                .build();
        if (shoppingListRepository.findAll().isEmpty()) {
            shoppingListRepository.save(shoppingList);

            shoppingList.setEntries(List.of(ShoppingListEntry.builder()
                    .active(true)
                    .build()));
            shoppingListRepository.save(shoppingList);
        }


    }
}