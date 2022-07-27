package at.enough.dashboard.shoppinglist.controller;


import at.enough.dashboard.shoppinglist.dto.ShoppingListDTO;
import at.enough.dashboard.shoppinglist.logic.ShoppingListService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

//TODO ask El where to put DTO converters? in controller or otherhere?
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/shopping-list")
public class ShoppingListController {
    private final ShoppingListService shoppingListService;

    @GetMapping
    public List<ShoppingListDTO> getShoppingLists() {
        return shoppingListService.getAll();

    }

    //Todo errormanagement?
    @GetMapping("{id}")
    public ShoppingListDTO getById(@PathVariable long id) {

        Optional<ShoppingListDTO> shoppingListDTOOptional = shoppingListService.findBy(id);
        if (shoppingListDTOOptional.isEmpty()) {
            System.out.println("works");
            return null;

        }

        return shoppingListDTOOptional.get();
    }


}
