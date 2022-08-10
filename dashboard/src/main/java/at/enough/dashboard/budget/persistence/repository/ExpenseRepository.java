package at.enough.dashboard.budget.persistence.repository;

import at.enough.dashboard.budget.persistence.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
