package at.enough.dashboard.shoppinglist.controller;


import at.enough.dashboard.shoppinglist.controller.dto.ShoppingListDTO;
import at.enough.dashboard.shoppinglist.controller.dto.ShoppingListDTOConverter;
import at.enough.dashboard.shoppinglist.logic.ShoppingListService;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/shopping-list")
public class ShoppingListController {
    private final ShoppingListService shoppingListService;
    private final ShoppingListDTOConverter shoppingListDTOConverter;

    @GetMapping
    public List<ShoppingListDTO> getShoppingLists() {
        return shoppingListService.getListOfShoppingLists().stream()
                .map(shoppingListDTOConverter::toDTO)
                .collect(Collectors.toList());

    }

    @GetMapping("/user")
    public long getShoppingListIdByUser() {
        return shoppingListService.getListOfShoppingLists().get(0).getId();
    }

    @GetMapping("/{id}")
    public ShoppingListDTO getById(@PathVariable long id) {

        Optional<ShoppingList> shoppingListDTOOptional = shoppingListService.findBy(id);
        if (shoppingListDTOOptional.isEmpty()) {
            return null;

        }


        return shoppingListDTOConverter.toDTO(shoppingListDTOOptional.get());
    }

    public void delete(@PathVariable long id) {
        shoppingListService.deleteListBy(id);
    }

    @GetMapping("/{id}/count")
    long unfinishedCount(@PathVariable("id") long id) {
        Optional<ShoppingList> optionalShoppingList = shoppingListService.findBy(id);
        if (optionalShoppingList.isEmpty()) {
            return 0;
        }
        return optionalShoppingList.get().getEntries().stream()
                .filter(ShoppingListEntry::isActive)
                .count();
    }

}
