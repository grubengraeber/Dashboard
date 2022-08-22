package at.enough.dashboard.budget.controller;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.service.BudgetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("api/v1/budget")
@RestController
@RequiredArgsConstructor
public class BudgetController {


    private final BudgetService budgetService;


    @GetMapping("/expenses")
    public List<Expense> getAll() {
        return budgetService.getAll();
    }


    @GetMapping("/expenses/chart")
    public Map<String, Double> getChartData() {
        return budgetService.getChartData();
    }


    @PostMapping("/expenses")
    public Expense add(@RequestBody Expense expense) {
        return budgetService.add(expense);
    }

    //todo add filter/interceptor for state check
    @PutMapping("/expenses/{expenseId}")
    public void edit(@PathVariable long expenseId, @RequestBody Expense expense) {
        budgetService.edit(expenseId, expense);

    }


}
