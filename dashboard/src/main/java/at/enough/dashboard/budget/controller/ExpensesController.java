package at.enough.dashboard.budget.controller;


import at.enough.dashboard.budget.controller.dto.AddExpenseRequestDTO;
import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.util.AddExpenseRequestDTOConverter;
import at.enough.dashboard.household.service.HouseHoldService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/my/household/expenses")
public class ExpensesController {

    private final HouseHoldService houseHoldService;
    private final AddExpenseRequestDTOConverter addExpenseRequestDTOConverter;

    @GetMapping
    public List<Expense> getMyHouseHoldExpenses(Authentication authentication, @RequestParam("time-span") Optional<Integer> oTimeSpan) {
        String userName = authentication.getName();
        Integer timeSpan = oTimeSpan.orElse(0);
        return houseHoldService.getUsersHouseHoldExpenses(userName, timeSpan);
    }


    @PostMapping
    public Expense addExpenseToMyHouseHold(Authentication authentication,
                                           @RequestBody AddExpenseRequestDTO addExpenseRequestDTO) {
        Expense newExpense = addExpenseRequestDTOConverter.convert(addExpenseRequestDTO);
        String userName = authentication.getName();
        return houseHoldService.addExpenseToUsersHousehold(userName, newExpense);
    }

    @DeleteMapping("/{expenseId}")
    public ResponseEntity<Void> deleteExpenseFromMyHousehold(Authentication authentication,
                                                             @PathVariable Long expenseId) {
        String userName = authentication.getName();
        houseHoldService.deleteExpenseFromUsersHouseHold(userName, expenseId);
        return ResponseEntity.status(204).build();
    }


}
