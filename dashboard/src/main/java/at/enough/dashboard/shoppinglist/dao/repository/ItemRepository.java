package at.enough.dashboard.shoppinglist.dao.repository;

import at.enough.dashboard.shoppinglist.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
    Item findFirstByName(String name);

    boolean existsByName(String name);
}
