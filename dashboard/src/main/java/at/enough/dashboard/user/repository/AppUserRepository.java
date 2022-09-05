package at.enough.dashboard.user.repository;

import at.enough.dashboard.user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {

    Optional<AppUser> findAppUserByAppUserName(String userName);
    Optional<AppUser> findAppUserByEmail(String email);
    boolean existsAppUserByEmail(String email);
}
