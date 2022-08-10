package at.enough.dashboard.budget.controller;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.service.BudgetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
