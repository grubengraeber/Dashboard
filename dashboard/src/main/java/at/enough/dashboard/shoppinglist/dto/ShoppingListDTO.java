package at.enough.dashboard.shoppinglist.dto;


import at.enough.dashboard.shoppinglist.model.ShoppingListPosition;

import java.time.LocalDateTime;
import java.util.List;

public record ShoppingListDTO(long id, String name, List<ShoppingListPosition> items, LocalDateTime timeStamp) {


}
