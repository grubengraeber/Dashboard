package at.enough.dashboard.shoppinglist.dao.repository;

import at.enough.dashboard.shoppinglist.model.ShoppingListEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingListEntryRepository extends JpaRepository<ShoppingListEntry, Long> {

}
