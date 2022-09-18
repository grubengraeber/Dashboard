package at.enough.dashboard.budget.controller;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.service.BudgetService;
import at.enough.dashboard.budget.util.AddExpenseRequestDTOConverter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
        return budgetService.getChartData();
    }




}
