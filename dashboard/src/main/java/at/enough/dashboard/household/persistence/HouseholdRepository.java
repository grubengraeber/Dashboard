package at.enough.dashboard.household.persistence;

import at.enough.dashboard.user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HouseholdRepository extends JpaRepository<Household, Long> {
    Household findHouseholdByAppUsersContaining(AppUser appUser);

    @Query("select distinct ec.name " +
            "from Household hold join hold.expenses expenses" +
            " join  expenses.category ec where hold.id = :#{#household.id}")
    List<String> getHouseholdExpenseCategoryNames(@Param("household") Household household);

}
