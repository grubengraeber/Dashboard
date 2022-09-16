package at.enough.dashboard.budget.controller;


import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.service.BudgetService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/my/household/expenses")
public class ExpensesController {

    private final BudgetService budgetService;

    @GetMapping
    public List<Expense> getMyHouseHoldExpenses(Authentication authentication, @RequestParam("time-span") Optional<Integer> timeSpan) {
        String userName = authentication.getName();
        if (timeSpan.isPresent()) {
            //return budgetService.getUsersHouseHoldExpenses(userName, timeSpan.get());
        }
        //return budgetService.getUsersHouseHoldExpenses(userName);
        return null;
    }



}
