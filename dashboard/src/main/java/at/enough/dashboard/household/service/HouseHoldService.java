package at.enough.dashboard.household.service;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.persistence.repository.ExpenseRepository;
import at.enough.dashboard.household.persistence.Household;
import at.enough.dashboard.household.persistence.HouseholdRepository;
import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.service.AppUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class HouseHoldService {

    private final HouseholdRepository householdRepository;
    private final AppUserService appUserService;
    private final ExpenseRepository expenseRepository;

    public Household getHouseHoldBy(String userIdentifier) {
        AppUser appUser = appUserService.getAppUserBy(userIdentifier);
        return appUser.getHousehold();
    }

    public List<Household> getAll() {
        return householdRepository.findAll();
    }


    public List<Expense> getUsersHouseHoldExpenses(String userName, int timeSpan) {
        Household usersHouseHold = getHouseHoldBy(userName);
        List<Expense> expenses = usersHouseHold.getExpenses();
        log.info("expenses = " + expenses);
        return expenses;

    }

    public Expense addExpenseToUsersHousehold(String userName, Expense expense) {
        Household userHousehold = getHouseHoldBy(userName);
        userHousehold.getExpenses().add(expense);
        Expense persistedExpense = expenseRepository.save(expense);
        householdRepository.save(userHousehold);
        return persistedExpense;
    }
//todo Add exception to Controller Advice
    //todo add fetch for user chartdata route
    public void deleteExpenseFromUsersHouseHold(String userName, Long expenseId) {
        Household userHousehold = getHouseHoldBy(userName);
        Expense expenseToRemove = expenseRepository.findById(expenseId).orElseThrow();
        log.info("deleted expense: "+ expenseToRemove);
        userHousehold.getExpenses().remove(expenseToRemove);
        householdRepository.save(userHousehold);
    }


}
