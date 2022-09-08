package at.enough.dashboard.household.persistence;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.user.model.AppUser;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Household {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @OneToMany
    private Set<ShoppingList> shoppingLists;
    @OneToMany
    private Set<AppUser> appUsers;
    /*@OneToMany
    private List<Expense> expenses;*/



}
