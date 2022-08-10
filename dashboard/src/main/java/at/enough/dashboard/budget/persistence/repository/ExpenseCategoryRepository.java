package at.enough.dashboard.budget.persistence.repository;

import at.enough.dashboard.budget.persistence.model.ExpenseCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseCategoryRepository extends JpaRepository<ExpenseCategory, Long> {
}
