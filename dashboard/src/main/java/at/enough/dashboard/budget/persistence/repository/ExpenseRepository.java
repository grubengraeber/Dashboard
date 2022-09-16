package at.enough.dashboard.budget.persistence.repository;

import at.enough.dashboard.budget.persistence.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

}
