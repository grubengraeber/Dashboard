package at.enough.dashboard.shoppinglist.dao.repository;

import at.enough.dashboard.shoppinglist.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {

    boolean existsByName(String name);

    Item findFirstByName(String name);
}
