package at.enough.dashboard.household.persistence;

import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.user.model.AppUser;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Household {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @OneToMany
    Set<ShoppingList> shoppingLists;
    @OneToMany
    Set<AppUser> appUsers;


}
