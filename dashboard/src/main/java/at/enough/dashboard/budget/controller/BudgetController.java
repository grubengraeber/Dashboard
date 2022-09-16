package at.enough.dashboard.budget.controller;

import at.enough.dashboard.budget.controller.dto.AddExpenseRequestDTO;
import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.service.BudgetService;
import at.enough.dashboard.budget.util.AddExpenseRequestDTOConverter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequestMapping("api/v1/budget")
@RestController
@RequiredArgsConstructor
@Slf4j
public class BudgetController {

    private final BudgetService budgetService;
    private final AddExpenseRequestDTOConverter addExpenseRequestDTOConverter;


    @GetMapping("/expenses")
    public List<Expense> getAll(@RequestParam(value = "time-span") Optional<Integer> timeSpan) {
        log.info("Requesting all expenses");
        return budgetService.getAll();
    }


    @GetMapping("/expenses/categories")
    public List<String> getCategories() {
        log.info("Requesting Expense Categories");

        return budgetService.getExpenseCategoryNames();
    }


    @GetMapping("/expenses/chart")
    public Map<String, Double> getChartData() {

        log.info("Requesting chartData");

        return budgetService.getChartData();
    }


    @PostMapping("/expenses")
    public Expense add(@RequestBody AddExpenseRequestDTO addExpenseRequestDTO) {
        Expense expense = addExpenseRequestDTOConverter.convert(addExpenseRequestDTO);
        log.info("expense added");
        return budgetService.add(expense);
    }

    //todo add filter/interceptor for state check
    @PutMapping("/expenses/{expenseId}")
    public void edit(@PathVariable long expenseId, @RequestBody Expense expense) {
        budgetService.edit(expenseId, expense);
        log.info("expense edited");
    }

    @DeleteMapping("/expenses/{expenseId}")
    public ResponseEntity<Void> delete(@PathVariable long expenseId) {
        log.info("Deleting for expense Id" + expenseId + " Works");
        budgetService.deleteExpense(expenseId);
        return ResponseEntity.status(204).body(null);


    }

    //todo move to service (sum)
    @GetMapping("/expenses/sum")
    double getSumOfExpenses() {
        return budgetService.getAll().stream()
                .mapToDouble(Expense::getCost)
                .sum();
    }


}
