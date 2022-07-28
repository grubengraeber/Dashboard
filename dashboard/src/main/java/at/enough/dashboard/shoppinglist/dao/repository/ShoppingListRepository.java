package at.enough.dashboard.shoppinglist.dao.repository;

import at.enough.dashboard.shoppinglist.model.ShoppingList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingListRepository extends JpaRepository<ShoppingList, Long> {

}
