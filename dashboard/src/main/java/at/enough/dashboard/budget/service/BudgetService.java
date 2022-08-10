package at.enough.dashboard.budget.service;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.persistence.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BudgetService {

    private final ExpenseRepository expenseRepository;


    public List<Expense> getAll() {
        return expenseRepository.findAll();


    }


    public Map<String, Double> getChartData() {
        return getAll().stream()
                .collect(Collectors.groupingBy(element -> element.getCategory().getName(),
                        Collectors.summingDouble(Expense::getCost)));


    }
}
