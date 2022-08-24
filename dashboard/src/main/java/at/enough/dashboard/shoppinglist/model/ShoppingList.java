package at.enough.dashboard.shoppinglist.model;


import lombok.*;

import javax.persistence.*;
import java.util.List;
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class ShoppingList {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String name;
    @OneToMany
    private List<ShoppingListEntry> entries;

}
