package at.enough.dashboard.budget.persistence.repository;

import at.enough.dashboard.budget.persistence.model.ExpenseCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ExpenseCategoryRepository extends JpaRepository<ExpenseCategory, Long> {

    @Query("select categories.name from ExpenseCategory categories")
    List<String> getExpenseCategoryNames();


    Optional<ExpenseCategory> findByName(String name);

}
