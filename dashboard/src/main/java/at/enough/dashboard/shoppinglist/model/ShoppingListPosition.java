package at.enough.dashboard.shoppinglist.model;

import lombok.Builder;

import java.time.LocalDateTime;
@Builder
public class ShoppingListPosition {
    private long id;
    private Item item;
    private boolean active;
    private LocalDateTime addedTime;
    private boolean optional;
    private User user;
    private int amount;
}
