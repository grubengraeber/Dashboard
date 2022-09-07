package at.enough.dashboard.household.persistence;

import at.enough.dashboard.user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseholdRepository extends JpaRepository<Household, Long> {
    Household findHouseholdByAppUsersContaining(AppUser appUser);

}
