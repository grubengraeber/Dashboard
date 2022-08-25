package at.enough.dashboard.shoppinglist.controller;

import at.enough.dashboard.shoppinglist.dao.repository.ItemRepository;
import at.enough.dashboard.shoppinglist.logic.ItemService;
import at.enough.dashboard.shoppinglist.model.Item;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/shopping-list/items")
public class ItemController {
    private final ItemService itemService;

    @GetMapping()
    List<Item> getAllItems() {
        return itemService.getAll();
    }


}
