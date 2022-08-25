package at.enough.dashboard.budget.controller;

import at.enough.dashboard.budget.controller.dto.AddExpenseRequestDTO;
import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.service.BudgetService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequestMapping("api/v1/budget")
@RestController
@RequiredArgsConstructor
public class BudgetController {
     Logger logger = LoggerFactory.getLogger(BudgetController.class);

    private final BudgetService budgetService;


    @GetMapping("/expenses")
    public List<Expense> getAll() {
        return budgetService.getAll();
    }

    @GetMapping("/expenses/categories")
    public List<String> getCategories() {
        return budgetService.getExpenseCategoryNames();
    }


    @GetMapping("/expenses/chart")
    public Map<String, Double> getChartData() {
        return budgetService.getChartData();
    }


    @PostMapping("/expenses")
    public Expense add(@RequestBody AddExpenseRequestDTO addExpenseRequestDTO) {

        return budgetService.add(addExpenseRequestDTO);
    }

    //todo add filter/interceptor for state check
    @PutMapping("/expenses/{expenseId}")
    public void edit(@PathVariable long expenseId, @RequestBody Expense expense) {
        budgetService.edit(expenseId, expense);

    }

    @DeleteMapping("/expenses/{expenseId}")
    public void delete(@PathVariable long expenseId) {
        logger.info("Deleting for expense Id" + expenseId + " Works");
        budgetService.deleteExpense(expenseId);



    }

    @GetMapping("/expenses/sum")
    double getSumOfExpenses() {
        return budgetService.getAll().stream()
                .mapToDouble(Expense::getCost)
                .sum();
    }


}
