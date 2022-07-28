package at.enough.dashboard.shoppinglist.controller.dto;


import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;

import java.time.LocalDateTime;
import java.util.List;

public record ShoppingListDTO(long id, String name, List<ShoppingListEntry> items, LocalDateTime timeStamp) {


}
