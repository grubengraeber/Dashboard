package at.enough.dashboard.budget.service;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.persistence.model.ExpenseCategory;
import at.enough.dashboard.budget.persistence.repository.ExpenseCategoryRepository;
import at.enough.dashboard.budget.persistence.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BudgetService {

    private final ExpenseRepository expenseRepository;
    private final ExpenseCategoryRepository expenseCategoryRepository;


    public List<Expense> getAll() {
        return expenseRepository.findAll();


    }

    public Expense findExpenseById(long id) {
        return expenseRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("There is no Expense with ID " + id));
    }


    public Map<String, Double> getChartData() {
        return getAll().stream()
                .collect(Collectors.groupingBy(element -> element.getCategory().getName(),
                        Collectors.summingDouble(Expense::getCost)));


    }

    public Expense add(Expense expense) {
        return expenseRepository.save(expense);
    }

    public void edit(long expenseId, Expense expense) {
        Expense persistedExpense = findExpenseById(expenseId);
        persistedExpense.setId(expenseId);
        expenseRepository.save(persistedExpense);

    }

    public List<String> getExpenseCategoryNames() {
        return expenseCategoryRepository.getExpenseCategoryNames();
    }

    public void deleteExpense(long expenseId) {
        Expense expense = findExpenseById(expenseId);
        expenseRepository.delete(expense);

    }
}
