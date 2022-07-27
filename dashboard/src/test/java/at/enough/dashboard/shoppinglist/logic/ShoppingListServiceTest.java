package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.shoppinglist.model.repository.ShoppingListRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ShoppingListServiceTest {

    @InjectMocks
    ShoppingListService shoppingListService;

    @Mock
    ShoppingListRepository shoppingListRepository;


    //TODO HELP EL! how to set up mocks with spring boot?
    @Test
    void getAllShoppingListsTest() {
        ShoppingList testShoppingListOne = ShoppingList.builder()
                .name("list one")
                .build();
        ShoppingList testShoppingListTwo = ShoppingList.builder()
                .name("list two")
                .build();
        ShoppingList testShoppingListThree = ShoppingList.builder()
                .name("list three")
                .build();
        List<ShoppingList> testLists = new ArrayList<>(
                List.of(testShoppingListOne,
                        testShoppingListTwo,
                        testShoppingListThree));

        when(shoppingListRepository.findAll()).thenReturn(testLists);

        //test
        List<ShoppingList> resultList = shoppingListService.getListOfShoppingLists();

        assertEquals(3, resultList.size());
        verify(shoppingListRepository, times(1)).findAll();

    }

    @Test
    void getAllShoppingListsReturnsEmptyListTest() {

        when(shoppingListRepository.findAll()).thenReturn(Collections.emptyList());

        //test
        List<ShoppingList> resultList = shoppingListService.getListOfShoppingLists();

        assertEquals(0, resultList.size());
        verify(shoppingListRepository, times(1)).findAll();

    }

    @Test
    void findByIdTest() {
        ShoppingList testShoppingListOne = ShoppingList.builder()
                .name("list one")
                .build();
        when(shoppingListRepository.findBy(1)).thenReturn(Optional.of(testShoppingListOne));

        //test
        Optional<ShoppingList> shoppingListOptional = shoppingListService.findBy(1);

        verify(shoppingListRepository, times(1)).findBy(1);
        assertTrue(shoppingListOptional.isPresent());
        assertEquals(testShoppingListOne, shoppingListOptional.get());
    }

    @Test
    void notFoundByIdReturnsEmptyTest() {

        when(shoppingListRepository.findBy(1)).thenReturn(Optional.empty());

        //test
        Optional<ShoppingList> shoppingListOptional = shoppingListService.findBy(1);

        verify(shoppingListRepository, times(1)).findBy(1);
        assertTrue(shoppingListOptional.isEmpty());
    }


}