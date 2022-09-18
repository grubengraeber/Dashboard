package at.enough.dashboard.budget.persistence.repository;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.household.persistence.Household;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

}
