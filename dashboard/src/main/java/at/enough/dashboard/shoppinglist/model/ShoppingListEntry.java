package at.enough.dashboard.shoppinglist.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table
public class ShoppingListEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @ManyToOne
    private Item item;

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    private boolean active;
    private LocalDateTime addedTime;
    private boolean optional;
    @ManyToOne
    private User user;
    private int amount;
    @ManyToOne
    private ShoppingList shoppingList;

}

