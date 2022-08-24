package at.enough.dashboard.shoppinglist.controller;


import at.enough.dashboard.shoppinglist.controller.dto.ShoppingListDTO;
import at.enough.dashboard.shoppinglist.controller.dto.ShoppingListDTOConverter;
import at.enough.dashboard.shoppinglist.logic.ShoppingListService;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
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

    @GetMapping("/{id}")
    public ShoppingListDTO getById(@PathVariable long id) {

        Optional<ShoppingList> shoppingListDTOOptional = shoppingListService.findBy(id);
        if (shoppingListDTOOptional.isEmpty()) {
            return null;

        }

        return shoppingListDTOConverter.toDTO(shoppingListDTOOptional.get());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {

        shoppingListService.deleteListBy(id);

    }
}
