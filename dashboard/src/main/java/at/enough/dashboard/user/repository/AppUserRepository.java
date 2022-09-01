package at.enough.dashboard.user.repository;

import at.enough.dashboard.shoppinglist.model.User;
import at.enough.dashboard.user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {

    Optional<AppUser> findAppUserByUserName(String userName);
    Optional<AppUser> findAppUserByEmail(String email);
}
