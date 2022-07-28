package at.enough.dashboard.shoppinglist.dao.repository;

import at.enough.dashboard.shoppinglist.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
