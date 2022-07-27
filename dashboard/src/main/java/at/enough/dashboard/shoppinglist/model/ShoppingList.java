package at.enough.dashboard.shoppinglist.model;


import lombok.*;

import java.util.List;
@Builder
@Getter
public class ShoppingList {

    private long id;
    private String name;
    List<ShoppingListPosition> shoppingListPositions;



}
