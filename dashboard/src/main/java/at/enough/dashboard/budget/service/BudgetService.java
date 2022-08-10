package at.enough.dashboard.budget.service;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.persistence.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BudgetService {

    private final ExpenseRepository expenseRepository;

    public List<Expense> getAll() {
        return expenseRepository.findAll();


    }


}
